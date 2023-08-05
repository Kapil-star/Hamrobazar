import mongoose from "mongoose";
//mongodb+srv://kappu:<password>@kapil.kxr1ryw.mongodb.net/?retryWrites=true&w=majority
const { DB_NAME, DB_PASSWORD, DB_USERNAME } = process.env;
const db_url = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@kapil.kxr1ryw.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;
export const db_connect = async () => {
  try {
    await mongoose.connect(db_url);
    console.log("DB CONNECTED....");
  } catch (error) {
    console.log("Connection to mongodb failed");
    console.log(error.message);
  }
};
