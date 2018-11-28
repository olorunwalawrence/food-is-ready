/* eslint-disable require-jsdoc */
import validator from 'validator';

export default class Validator {
  static createmealValidator(req, res, next) {
    const {
      mealname, price, description, image
    } = req.body;
    if (validator.isEmpty(mealname && price && description && image)) {
      return res.status(400).json({ message: 'empty field detected' });
    }
    next();
  }
}


export class orderValidator {
  static orderMealValidator(req, res, next) {
    const {
      fullname, email, phonenumber, address, bstop, lga
    } = req.body;
    if (validator.isEmpty(fullname && email && phonenumber && address && bstop && lga)) {
      console.log(res.status(400).json({ message: 'empty field detected' }));
      return res.status(400).json({ message: 'empty field detected' });
    }
    next();
  }
}
