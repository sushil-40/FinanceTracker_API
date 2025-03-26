import TransactionSchema from "./transactionSchema.js";

// insert

export const insertTransaction = (obj) => {
  return TransactionSchema(obj).save();
};
