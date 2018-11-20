'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var model = {
  signupTable: function signupTable() {
    var userTable = '\n        CREATE TABLE IF NOT EXISTS users (\n\n        userid serial PRIMARY KEY,\n        firstname VARCHAR(255) NOT NULL,\n        lastname VARCHAR(255) NOT NULL,\n        username VARCHAR(255) NOT NULL,\n        email TEXT NOT NULL UNIQUE,\n        password VARCHAR(255) NOT NULL\n        \n        )';
    return _index2.default.query(userTable);
  }
};

model.signupTable().then(function () {
  console.log('user table created successfully');
}).catch(function (err) {
  console.log(err.message);
});

exports.default = model;