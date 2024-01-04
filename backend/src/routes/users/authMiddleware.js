import { User } from "../../models/User.js";
import jwt from "jsonwebtoken";
import { verifyJWT } from "../../utils/verifyJWT.js";

const middleware = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    if (!token) {
      throw new Error("auth");
    }
    const { userId, role, dep } = verifyJWT(token);
    req.userData = { userId, role, dep };
    next();
  } catch (error) {
    res.status(401).json({ message: "Authentication failed" });
  }
};

export { middleware as authMiddleware };
