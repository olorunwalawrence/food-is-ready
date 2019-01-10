/* eslint-disable require-jsdoc */
import { check } from 'express-validator/check';

export default class checkNull {
  static fieldUndefined(req, res, next) {
    // const body = req.body;
    const {
 mealname, price, image, description 
} = req.body;

    if (!mealname) {
      return res.status(422).json({ message: 'meal Name field is needed ' });
    }
    if (!price) {
      return res.status(422).json({ message: ' price field is needed ' });
    } if (!image) {
      return res.status(422).json({ message: ' image field is needed ' });
    } if (!description) {
      return res.status(422).json({ message: ' Description field is needed ' });
    }
    next();
  }
}

// check for null and undefined in signup and login fields

