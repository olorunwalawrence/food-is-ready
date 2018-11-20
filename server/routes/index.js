import express from 'express';
import user from '../controllers/userController';
import verifyUser from '../middleware/authentication';
import passportjwt from '../strategies/passportJwt';


const { createUser } = user;
const router = express.Router();

router.post('/create', verifyUser, createUser);

export default router;
