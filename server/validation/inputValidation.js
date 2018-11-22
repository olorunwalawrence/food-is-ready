// import check from 'express-validator/check';

const { check } = require('express-validator/check');

export default {
  CheckSignupinput: [
    check('firstname')
      .trim().not()
      .isEmpty()
      .withMessage('first name is required')
      .matches(/^[a-zA-Z]+$/)
      .withMessage('firstname can only contain letters'),

    check('lastname').trim().not()
      .isEmpty()
      .withMessage('last name is required')
      .matches(/^[a-zA-Z]+$/)
      .withMessage('lastname can only contain letters'),

    check('username').trim().not()
      .isEmpty()
      .withMessage('username is required')
      .matches(/^[a-zA-Z]+$/)
      .withMessage('username can only contain letters'),

    check('email').trim().not()
      .isEmpty()
      .withMessage('email is required')
      .isEmail()
      .withMessage('must be in email format e.g sample@sample.com'),

    check('password')
      .trim().not().isEmpty()
      .withMessage('password is required'),
  ],

  checkLogininput: [
    check('username').trim().not()
      .isEmpty()
      .withMessage('username is required')
      .matches(/^[a-zA-Z]+$/)
      .withMessage('username can only contain letters'),

    check('email').trim().not()
      .isEmpty()
      .withMessage('email is required')
      .isEmail()
      .withMessage('must be in email format e.g sample@mail.com'),

    check('password')
      .trim().not().isEmpty()
      .withMessage('password is required')
  ]
};
