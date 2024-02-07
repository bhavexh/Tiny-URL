import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config();

const generateTokenAndSetCookies = (userId, res) => {
  // Generate token
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  // Set cookies
  res.cookie("jwt", token, {
    httpOnly: true,
    maxAge: 30 * 24 * 60 * 60 * 1000, //30 days
    sameSite: "strict",
  });

  return token;
};

export default generateTokenAndSetCookies;