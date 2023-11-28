import { User } from "../../models/User.js";
import jwt from "jsonwebtoken";

const middleware = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer", "").trim();

    const decoded = jwt.verify(token, "secret");

    const user = await User.findById(decoded.userId);

    if (!user) {
      throw new Error();
    }

    req.userData = {
      userId: user._id,
      userRole: user.role,
      userEmail: user.department,
    };

    next();
  } catch (err) {
    res.status(401).json({ error: "Please authentication." });
  }
};

export { middleware as authMiddleware };
