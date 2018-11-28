const find = {
  getalluser: 'SELECT * FROM users ',
  findbyemail: 'SELECT * FROM users WHERE email = $1 LIMIT 1;',
  findByUsername: 'SELECT * FROM users WHERE username = $1 LIMIT 1;',
  findMealById: 'SELECT * FROM meal WHERE mealid = $1;',
  findallmeal: 'select * FROM meal LIMIT 100',
  UserOrder: 'select * FROM foodorders WHERE userid = $1 LIMIT 100',
  allUserOrder: 'select * FROM foodorders  LIMIT 100',
  allRequestOrder: 'select * FROM request  LIMIT 100',
  orderedMeal: 'select * FROM  foodorders  LIMIT 200',
  getallorder: 'select * from foodorder LIMIT 100',
  getallcart: 'select * from meal LIMIT 100',
  findAllRequestByUserId: 'SELECT * FROM request WHERE userid = $1 LIMIT 100;'
};


export default find;
