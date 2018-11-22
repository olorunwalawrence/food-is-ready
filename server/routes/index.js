import express from 'express';
import user from '../controllers/userController';
import admin from '../controllers/admincontroller';
import verifyUser from '../middleware/authentication';
import findExisting from '../middleware/exitingUser';
import inputValidation from '../validation/inputValidation';

const { checkLogininput, CheckSignupinput } = inputValidation;

const { exitingUsername, existingEmail } = findExisting;
const { createMeal, findAllUser } = admin;
const {
  createUser,
  userLogin,
  getameal,
  deleteAameal
} = user;

const router = express.Router();

router.post('/createmeal', verifyUser, createMeal);
router.post('/create', CheckSignupinput, exitingUsername, existingEmail, createUser);
router.post('/login', checkLogininput, verifyUser, userLogin);
router.get('/getalluser', findAllUser);
router.get('/getameal/:mealId', verifyUser, getameal);
router.delete('/deleterequest/:mealid', verifyUser, deleteAameal);


export default router;
