'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require('../index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  dropUserTable: function dropUserTable() {
    var userModel = '\n    DROP TABLE IF EXISTS users CASCADE;';
    return _index2.default.query(userModel);
  }
};