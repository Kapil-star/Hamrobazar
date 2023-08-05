import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 3,
    maxlength: 55,
    required: true,
    trim: true,
  },
  dob: {
    type: Date,
    trim: true,
    required: true,
  },
  gender: {
    type: String,
    enum: ["male", "female", "preferNotToSay"],
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
});

//create table
export const Customer = mongoose.model("Customer", customerSchema);
