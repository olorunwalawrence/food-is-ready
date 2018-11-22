/* eslint-disable require-jsdoc */
import db from '../models/index';
import insert from '../queries/insert';
import find from '../queries/find';

const { getalluser } = find;
const { createMeal } = insert;

// create meal controller

class admin {
  static createMeal(req, res) {
    const {
      mealname,
      price,
      availability
    } = req.body;
    const mealValue = [

      mealname,
      price,
      availability

    ];

    db.query(createMeal, mealValue).then((meals) => {
      res.json(meals);
    }).catch((err) => {
      res.json({
        message: err.message
      });
    });
  }


  // find all users

  static findAllUser(req, res) {
    db.query(getalluser).then((users) => {
      res.json(users);
    }).catch((err) => {
      res.send(err.message);
    });
  }


  // update meal controller
}

export default admin;
