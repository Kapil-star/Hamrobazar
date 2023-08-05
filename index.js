import express from "express";

import { db_connect } from "./db_connect.js";
import router from "./customer/customer.route.js";
const app = express();

app.use(express.json());

//db connect
db_connect();
// routing
app.use(router);

const port = 8000;
app.listen(port, () => {
  console.log(`App is listening to port ${port}`);
});
