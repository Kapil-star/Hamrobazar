import express from "express";

import { Customer } from "./customer.model.js";
import {
  createCustomer,
  deleteCustomer,
  getCustomers,
} from "./customer.service.js";
import { validateEntries } from "./customer.service.js";
import { checkMongoId } from "../utils/utils.js";

const router = express.Router();
router.post("/customers/create", validateEntries, createCustomer);

router.get("/customers/get", getCustomers);

// delete customers
router.delete("/customers/delete/:id", deleteCustomer);

export default router;
