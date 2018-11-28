/* eslint-disable require-jsdoc */
import db from '../models/index';
import find from '../queries/find';

const { findByUsername, findbyemail } = find;

class findExisting {
  static exitingUsername(req, res, next) {
    const { username } = req.body;

    db.query(findByUsername, [username]).then((user) => {
      if (user.rows.length > 0) {
        res.status(400).json({
          success: false,
          message: 'username unavailable, choose another username',
        });
      }
      next();
    }).catch((err) => {
      res.json(err.message);
    });
  }


  static existingEmail(req, res, next) {
    const { email } = req.body;
    db.query(findbyemail, [email]).then((user) => {
      if (user.rows.length > 0) {
        res.status(400).json({
          success: false,
          message: 'Email Unavailable, please choose a new email address'
        });
      }
      next();
    }).catch((err) => {
      res.json(err.message);
    });
  }
}

export default findExisting;
