'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _userController = require('../controllers/userController');

var _userController2 = _interopRequireDefault(_userController);

var _authentication = require('../middleware/authentication');

var _authentication2 = _interopRequireDefault(_authentication);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createUser = _userController2.default.createUser,
    findAllUser = _userController2.default.findAllUser;

var router = _express2.default.Router();

router.post('/create', createUser);
router.get('/getalluser', findAllUser);

exports.default = router;