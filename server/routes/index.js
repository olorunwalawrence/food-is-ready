import express from 'express';
import user from '../controllers/userController';
import verifyUser from '../middleware/authentication';


const { createUser, findAllUser, userLogin } = user;
const router = express.Router();

router.post('/create', verifyUser, createUser);
router.post('/login', userLogin);
router.get('/getalluser', findAllUser);

export default router;
