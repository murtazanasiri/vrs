import { User } from "../../models/User.js";
import { verifyJWT } from "../../utils/verifyJWT.js";

const middleware = (req, res, next) => {
  try {
    const { token } = req.cookies;
    if (!token) {
      throw new Error("Authentication failed");
    }
    const { userId, role, dep } = verifyJWT(token);
    req.userData = { userId, role, dep };
    next();
  } catch (error) {
    res.status(401).json({ message: "Authentication failed" });
  }
};

export { middleware as authMiddleware };
