import { User } from "../../models/User.js";
import { verifyJWT } from "../../utils/verifyJWT.js";

const middleware = (req, res, next) => {
  try {
    const { token } = req.cookies;
    if (!token) {
      throw new Error("Authentication failed");
    }

    console.log(verifyJWT(token));
    const { userId, role, roleName, dep } = verifyJWT(token);
    req.userData = { userId, role, roleName, dep };
    next();
  } catch (error) {
    res.status(401).json({ message: "Authentication failed" });
  }
};

export { middleware as authMiddleware };
