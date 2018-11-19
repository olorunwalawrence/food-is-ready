import express from 'express';
import user from '../controllers/userController';

const { createUser } = user;
const router = express.Router();

router.post('/create', createUser);

export default router;
