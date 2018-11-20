import express from 'express';
import user from '../controllers/userController';
import verifyUser from '../middleware/authentication';


const { createUser, findAllUser } = user;
const router = express.Router();

router.post('/create', createUser);
router.get('/getalluser', findAllUser);

export default router;
