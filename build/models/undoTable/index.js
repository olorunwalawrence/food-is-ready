'use strict';

var _deleteTable = require('./deleteTable');

var _deleteTable2 = _interopRequireDefault(_deleteTable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_deleteTable2.default.dropUserTable().then(function () {
  console.log('user table droped successfully');
}).catch(function (err) {
  console.log(err.message);
});