import mongoose from "mongoose";
export const checkMongoId = (mongoId) => {
  return mongoose.Types.ObjectId.isValid(mongoId);
};
