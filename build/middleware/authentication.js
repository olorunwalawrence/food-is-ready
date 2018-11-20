'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _dotenv = require('dotenv');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _dotenv.config)();

var secret = process.env.SECRET;

var verifyUser = function verifyUser(req, res, next) {
  var token = req.headers['x-access-token'];
  if (!token) {
    res.status(301).json({
      success: false,
      message: 'authentication failed, please login'
    });
  }

  try {
    var decoded = _jsonwebtoken2.default.verify(token, secret);
    if (!decoded) {
      res.status(401).json({
        message: 'authentication failed'
      });
    }
    req.decoded = decoded;
    next();
  } catch (error) {
    res.status(400).json({
      message: 'invalid token'
    });
  }
};

exports.default = verifyUser;