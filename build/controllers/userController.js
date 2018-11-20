'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* eslint-disable require-jsdoc */


var _dotenv = require('dotenv');

var _bcryptjs = require('bcryptjs');

var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _index = require('../models/index');

var _index2 = _interopRequireDefault(_index);

var _insert = require('../queries/insert');

var _insert2 = _interopRequireDefault(_insert);

var _find = require('../queries/find');

var _find2 = _interopRequireDefault(_find);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// require('../models/createtables');


var userSignup = _insert2.default.userSignup;


(0, _dotenv.config)();
var secret = process.env.SECRET;

var Users = function () {
  function Users() {
    _classCallCheck(this, Users);
  }

  _createClass(Users, null, [{
    key: 'createUser',

    // create users

    value: function createUser(req, res) {
      var password = _bcryptjs2.default.hashSync(req.body.password, 10);
      var _req$body = req.body,
          firstname = _req$body.firstname,
          lastname = _req$body.lastname,
          username = _req$body.username,
          email = _req$body.email;

      // eslint-disable-next-line no-sparse-arrays

      var userValues = [firstname.trim().toLowerCase(), lastname.trim().toLowerCase(), username.trim().toLowerCase(), email.trim().toLowerCase(), password.trim()];

      _index2.default.query(userSignup, userValues).then(function (newUser) {
        var userid = newUser.rows[0].userid;


        var token = _jsonwebtoken2.default.sign({ userid: userid, email: email, username: username }, secret, { expiresIn: '10h' });

        res.status(200).json({
          success: true,
          message: 'user successfully created',
          user: {
            username: username,
            email: email,
            token: token
          }

        });
      }).catch(function (err) {
        res.send(err.message);
      });
    }
  }, {
    key: 'findAllUser',
    value: function findAllUser(req, res) {
      _index2.default.query(_find2.default.getalluser).then(function (users) {
        res.json(users);
      }).catch(function (err) {
        res.send(err.message);
      });
    }
  }]);

  return Users;
}();

exports.default = Users;