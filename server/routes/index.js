import express from 'express';
import user from '../controllers/userController';
import admin from '../controllers/admincontroller';
import verifyUser from '../middleware/authentication';
import findExisting from '../middleware/exitingUser';
import validator from '../validation/inputValidation';

const { createmealValidator ,orderMealValidator, loginValidator, signupValidator } = validator;
const { exitingUsername, existingEmail } = findExisting;
const { createMeal, findAllUser, findAllMeal } = admin;

const {
  createUser,
  userLogin,
  getameal,
  deleteAameal,
  encrptAdminPassCode,
  requestMeal,
  findAllrequestedMeal,
  deleteMealRequest,
  OrderAMeal,
  selectOrederd,
  finduserOrderById,
  findAllUserOrders,
  findAllrequestedMeals
} = user;

const router = express.Router();
router.post('/requestmeal', verifyUser, requestMeal);
router.post('/order',orderMealValidator,verifyUser,OrderAMeal);
router.post('/createmeal',createmealValidator, createMeal);
router.post('/signup',signupValidator, exitingUsername, existingEmail, createUser);
router.post('/login',loginValidator,userLogin);
router.get('/getalluser', findAllUser);
router.get('/getallmeal', findAllMeal);
router.get('/getameal/:mealId', getameal);
router.delete('/deleterequest/:mealid', verifyUser, deleteAameal);
router.delete('/deleterequested/:requestid', verifyUser, deleteMealRequest);
router.get('/update-admin-passcode', encrptAdminPassCode);
router.get('/requestedmeal', verifyUser, findAllrequestedMeal);
router.get('/requestedmeals', findAllrequestedMeals);
router.get('/allorderedmeal', verifyUser, selectOrederd);
router.get('/userorder', verifyUser, finduserOrderById);
router.get('/alluserorder', findAllUserOrders);


export default router;
