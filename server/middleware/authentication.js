import jwt from 'jsonwebtoken';
import { config } from 'dotenv';

config();

const secret = process.env.SECRET;

const verifyUser = (req, res, next) => {
  const token = req.headers['x-access-token'];
  if (!token) {
    return res.status(301).json({
      success: false,
      message: 'authentication failed, please login'
    });
  }

  try {
    const decoded = jwt.verify(token, secret);
    if (!decoded) {
      return res.status(401).json({
        message: 'authentication failed'
      });
    }
    req.decoded = decoded;
    next();
  } catch (error) {
    return res.status(400).json({
      message: 'invalid token'
    });
  }
};

export default verifyUser;
