import { Customer } from "./customer.model.js";
import Joi from "joi";
import { checkMongoId } from "../utils/utils.js";

export const createCustomer = async (req, res) => {
  try {
    const newCustomer = req.body;
    await Customer.create(newCustomer);
    res.status(200).send("Customer added successfully");
  } catch (error) {
    console.log(error);
    return res.status(404).send("Email is already taken");
  }
};
export const getCustomers = async (req, res) => {
  const allDetails = await Customer.find();
  res.status(200).send(allDetails);
};

//validation
export const validateEntries = async (req, res, next) => {
  const newCustomer = req.body;
  const schema = Joi.object({
    name: Joi.string().min(3).max(55).required().trim(),
    dob: Joi.string().required,
    gender: Joi.string().required().valid("male", "female", "preferNotToSay"),
    email: Joi.string().email().required().trim(),
  });
  try {
    await schema.validateAsync(newCustomer);
    next();
  } catch (error) {
    return res.status(400).send({ message: error.message });
  }
};
export const deleteCustomer = async (req, res) => {
  const customerId = req.params.id;
  const isValidId = checkMongoId(customerId);
  if (!isValidId) {
    return res.status(400).send("send valid Id ");
  }
  await Customer.deleteOne({
    _id: customerId,
  });
  return res.status(200).send("Deleted Sucessfully");
};
