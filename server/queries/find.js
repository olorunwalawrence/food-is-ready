const find = {
  getalluser: 'SELECT * FROM users ',
  findbyemail: 'SELECT * FROM users WHERE email = $1 LIMIT 1;'

};

export default find;
