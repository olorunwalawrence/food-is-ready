/* eslint-disable require-jsdoc */
import db from '../models/index';
import insert from '../queries/insert';
import find from '../queries/find';

const { getalluser, findallmeal } = find;
const { createMeal } = insert;

// create meal controller

class admin {
  static createMeal(req, res) {
    const {
      mealname,
      price,
      image,
      description
    } = req.body;
    const mealValue = [

      mealname,
      price,
      image,
      description

    ];

    db.query(createMeal, mealValue).then((meals) => {
      res.status(201).json(meals.rows[0]);
    }).catch((err) => {
      res.json({
        msg: err.message
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


  // find all meal
  static findAllMeal(req, res) {
    db.query(findallmeal)
      .then(
        availablemeal => res.status(200)
          .json(availablemeal.rows)
      )

      .catch((err) => {
        res.send(err.message);
      });
  }
}

export default admin;
