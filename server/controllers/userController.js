/* eslint-disable require-jsdoc */
import { config } from 'dotenv';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import db from '../models/index';
import insert from '../queries/insert';
import find from '../queries/find';
import Delete from '../queries/delete';

const mailer = require('../utils/mail');

const { findbyemail, findMealById } = find;
const { userSignup } = insert;
const { deletemeal } = Delete;


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
        const { userid, username } = req.body;

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
        message: 'thank you for your patronage, your meal will be ready soon',
        meal: meal.rows
      });
    }).catch((err) => {
      res.status(400).json({
        message: err.message
      });
    });
  }

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
}
