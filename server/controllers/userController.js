/* eslint-disable require-jsdoc */
import { config } from 'dotenv';
import bcrypt from 'bcryptjs';
import db from '../models/index';
import insert from '../queries/insert';

const { userSignup } = insert;

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
      res.send(newUser);
    }).catch((err) => {
      res.send(err.message);
    });
  }
}