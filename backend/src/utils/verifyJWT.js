import jwt from "jsonwebtoken";

export const verifyJWT = (token) => {
  const decode = jwt.verify(token, process.env.JWT_SECRET);
  return decode;
};
