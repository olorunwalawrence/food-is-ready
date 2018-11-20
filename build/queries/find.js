'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var find = {
  getalluser: 'SELECT * FROM users WHERE userId = $1'
};

exports.default = find;