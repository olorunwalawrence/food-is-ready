const query = {
  userSignup: 'INSERT INTO users (firstname,lastname, username, email, password) VALUES ($1, $2, $3, $4,$5) returning *',
  createMeal: 'INSERT INTO meal (mealname,price, image, description ) VALUES ($1, $2, $3,$4) returning *',
  mealrequest: 'INSERT INTO request (mealname, price, userid) VALUES ($1, $2 ,$3) returning *',
  orderMeal: 'INSERT INTO foodorders (fullname,email, phone,address, bstop,lga,userid) VALUES ($1, $2, $3,$4,$5,$6,$7) returning *',

};
export default query;
