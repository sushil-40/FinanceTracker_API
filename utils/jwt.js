import jwt from "jsonwebtoken";
export const signJWT = (obj) => {
  const token = jwt.sign(obj, process.env.JWT_SECRET, { expiresIn: "1d" });

  //store in the database

  return token;
};
