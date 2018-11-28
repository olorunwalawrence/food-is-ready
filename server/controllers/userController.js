/* eslint-disable no-unused-vars */
/* eslint-disable require-jsdoc */
import { config } from 'dotenv';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import db from '../models/index';
import insert from '../queries/insert';
import find from '../queries/find';
import Delete from '../queries/delete';

const mailer = require('../utils/mail');

const {
  findbyemail, findMealById, UserOrder, orderedMeal,
  findAllRequestByUserId, allUserOrder, allRequestOrder
} = find;
const { userSignup, mealrequest, orderMeal } = insert;
const { deletemeal, deleteRequest } = Delete;


config();
const secret = process.env.SECRET;

export default class Users {
  // create users

  static createUser(req, res) {
    const password = bcrypt.hashSync(req.body.password, 10);
    const {
      firstname,
      lastname,
      username,
      email,

    } = req.body;

    // eslint-disable-next-line no-sparse-arrays
    const userValues = [
      firstname.trim().toLowerCase(),
      lastname.trim().toLowerCase(),
      username.trim().toLowerCase(),
      email.trim().toLowerCase(),
      password.trim(),

    ];


    db.query(userSignup, userValues).then((newUser) => {
      const { userid } = newUser.rows[0];
      const token = jwt.sign({ userid, email, username }, secret, { expiresIn: '10h' });

      mailer(newUser.rows[0].email);

      // confirm mail from your email account
      return res.status(200).json({
        success: true,
        message: 'user successfully created',
        user: {
          username,
          email,
          token
        }
      });
    }).catch((err) => {
      res.json(err);
    });
  }


  // user login
  static userLogin(req, res) {
    const { email, password } = req.body;
    const userEmail = [email.trim()];

    db.query(findbyemail, userEmail).then((user) => {
      if (user.rows[0] && bcrypt.compareSync(password.trim(), user.rows[0].password)) {
        const { userid, username } = user.rows[0];

        const token = jwt.sign({ userid, email, username }, secret, { expiresIn: '10h' });
        return res.status(200).json({
          success: true,
          message: `${username.toUpperCase()} is successfully logged in.`,
          result: { username, email, token }
        });
      }
      return res.status(400).json({
        success: false,
        message: 'login credentials is incorrect '
      });
    }).catch((err) => {
      res.status(500).json({
        success: false,
        message: `their is an internal/server error ${err.message}`
      });
    });
  }

  // user should be able to get a meal
  static getameal(req, res) {
    const { mealId } = req.params;

    db.query(findMealById, [mealId]).then((meal) => {
      res.status(200).json({
        success: true,
        message: 'success',
        meal: meal.rows
      });
    }).catch((err) => {
      res.status(400).json({
        message: err.message
      });
    });
  }

  // delete a meal
  static deleteAameal(req, res) {
    const { mealid } = req.params;
    db.query(deletemeal, [mealid]).then((del) => {
      res.status(200).json({
        success: true,
        message: 'the selected meal request is deleted successfully',
        del
      });
    }).catch((err) => {
      res.send(err.message);
    });
  }

  // delete a meal request
  static deleteMealRequest(req, res) {
    const { requestid } = req.params;
    db.query(deleteRequest, [requestid]).then((del) => {
      res.status(200).json({
        success: true,
        message: 'the selected meal request is deleted successfully',
        del
      });
    }).catch((err) => {
      res.send(err.message);
    });
  }

  static encrptAdminPassCode(req, res) {
    const passCode = bcrypt.hashSync(process.env.PASSCODE, 10);
    return db.query('UPDATE users SET password=$1 WHERE email=$2', [passCode, process.env.EMAIL])
      .then(user => res.status(200).json({ message: 'passcode updated', admin: user.rows[0] }))
      .catch(err => console.log(err.message));
  }


  static requestMeal(req, res) {
    const {
      mealname,
      price
    } = req.body;
    const { userid } = req.decoded;
    const data = [
      mealname.trim().toLowerCase(),
      price,
      userid
    ];

    db.query(mealrequest, data).then(resq => res.status(200).json({
      resq
    })).catch(err => console.log(err.messsage));
  }


  // find all requested meal
  static findAllrequestedMeal(req, res) {
    const { userid } = req.decoded;
    db.query(findAllRequestByUserId, [userid])
      .then(userRequest => res.status(200)
        .json(userRequest.rows)).catch((err) => {
        res.send(err.message);
      });
  }

  // ############################
  // order meals
  static OrderAMeal(req, res) {
    const { userid } = req.decoded;

    const {
      fullname,
      email,
      phone,
      address,
      bstop,
      lga
    } = req.body;

    const OrderValue = [
      fullname,
      email,
      phone,
      address,
      bstop,
      lga,
      userid
    ];

    db.query(orderMeal, OrderValue).then((orderinfo) => {
      res.status(201).json(orderinfo.rows);
    }).catch((err) => {
      res.send(err.message);
    });
  }

  // #############################

  // ########################
  // select all ordered food and send it to the order page

  static selectOrederd(req, res) {
    db.query(orderedMeal).then((foodordered) => {
      res.status(200).json(foodordered.rows);
    }).catch((err) => {
      console.log(err.mesage);
    });
  }

  // ######################
  // select UserOrder meal by user id
  static finduserOrderById(req, res) {
    const { userid } = req.decoded;
    db.query(UserOrder, [userid]).then((userorder) => {
      res.status(200).json(userorder.rows);
    }).catch((err) => {
      res.send(err.message);
    });
  }

  static findAllUserOrders(req, res) {
    db.query(allUserOrder).then((userorder) => {
      res.status(200).json(userorder.rows);
    }).catch((err) => {
      res.send(err.message);
    });
  }

  /* =====================================
  FIND ALL REQUESTed MEALS AND SEND THE
   RESULT TO THE ADMIN
===================================== */

  static findAllrequestedMeals(req, res) {
    db.query(allRequestOrder)
      .then(userRequest => res.status(200)
        .json(userRequest.rows)).catch((err) => {
        res.send(err.message);
      });
  }
}
