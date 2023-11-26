import { User } from "../../models/User.js";
import { jwt } from "jsonwebtoken";

const middleware = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer", "");
    const decoded = jwt.verify(
      token,
      "eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTcwMDkwMjQ4NiwiaWF0IjoxNzAwOTAyNDg2fQ.LELnCK83n8tacY6SRQXu4CfOd0nGvp2xoRhHy53Wthw"
    );

    const user = await User.findOne({
      _id: decoded.userId,
      "tokens.token": token,
    });

    if (!user) {
      throw new Error();
    }

    req.token = token;
    req.user = user;
    next();
  } catch (err) {
    res.status(401).json({ error: "Please authentication." });
  }
};

export { middleware as authMiddleware };
