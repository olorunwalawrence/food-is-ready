/* eslint-disable require-jsdoc */
import validator from 'validator';

export default class Validator {
  static createmealValidator(req, res, next) {
    const {
 mealname, price, description, image 
} = req.body;
    if (validator.isEmpty(mealname && price && description && image)) {
      return res.status(400).json({ message: 'Empty field detected' });
    }
    next();
  }

  static orderMealValidator(req, res, next) {
    const {
 fullname, email, phonenumber, address, bstop, lga 
} = req.body;
    if (
      validator.isEmpty(
        fullname && email && phonenumber && address && bstop && lga
      )
    ) {
      return res.status(400).json({ message: 'Empty field detected' });
    }
    next();
  }

  static loginValidator(req, res, next) {
    const { email, password } = req.body;
    if (validator.isEmpty(email && password)) {
      return res.status(400).json({ message: 'Empty filed detected' });
    }
    next();
  }

  static signupValidator(req, res, next) {
    const {
 firstname, lastname, username, email, password 
} = req.body;
    if (validator.isEmpty(firstname && lastname && username && email && password)) {
      return res.status(400).json({ message: 'Empty filed detected' });
    }
    next();
  }
}
