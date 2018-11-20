const query = {
  userSignup: 'INSERT INTO users (firstname,lastname, username, email, password) VALUES ($1, $2, $3, $4,$5) returning *',
};
export default query;
