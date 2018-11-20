'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _pg = require('pg');

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv2.default.config();

var config = {
  connectionString: process.env.DATABASE_URL,
  max: 10, // max number of clients in the pool
  idleTimeoutMillis: 30000
};

var pool = new _pg.Pool(config);

pool.connect().then(function () {
  console.log('database connected successfully');
}).catch(function (err) {
  console.log(err);
});

exports.default = pool;