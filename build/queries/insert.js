'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var query = {
  userSignup: 'INSERT INTO users (firstname,lastname, username, email, password) VALUES ($1, $2, $3, $4,$5) returning *'
};
exports.default = query;