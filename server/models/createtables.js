import index from './index';

import meal from './mealtable';

const signupTable = () => {
  const userTable = `
        CREATE TABLE IF NOT EXISTS users (

        userid serial PRIMARY KEY,
        firstname VARCHAR(255) NOT NULL,
        lastname VARCHAR(255) NOT NULL,
        username VARCHAR(255) NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL
        
        )`;
  return index.query(userTable);
};

signupTable().then(() => {
  console.log('user table created successfully');
  meal.mealTable().then(() => {
    console.log('meal table created successfully');
    process.exit();
  }).catch((err) => {
    console.log(err.message);
  });
}).catch((err) => {
  console.log(err.message);
});
