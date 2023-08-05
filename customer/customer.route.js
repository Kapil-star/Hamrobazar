import express from "express";

import { Customer } from "./customer.model.js";
import { createCustomer, getCustomers } from "./customer.service.js";
import { validateEntries } from "./customer.service.js";

const router = express.Router();
router.post("/customer/create", validateEntries, createCustomer);

router.get("/allcustomers", getCustomers);

//delete customers
// router.delete("")

export default router;
