import index from './index';
import meal from './mealtable';
import foodorder from './orderTable';
import requestmeal from './requestTable';


const print = console;

const signupTable = () => {
  const userTable = `
        CREATE TABLE IF NOT EXISTS users (

        userid SERIAL PRIMARY KEY,
        firstname VARCHAR(255) NOT NULL,
        lastname VARCHAR(255) NOT NULL,
        username VARCHAR(255) NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL
        
        )`;
  return index.query(userTable);
};


signupTable().then(() => {
  print.log('user table created successfully');
});
meal.mealTable().then(() => {
  print.log('meal table created successfully');
});

setTimeout(() => {
  foodorder.orderTable().then(() => {
    print.log('foodorder table created succesfully');
  }).catch((err) => {
    print.log(err.message);
  });
}, 4000);

setTimeout(() => {
  requestmeal.requestTable().then(() => {
    print.log('request tabale created successfully');
    process.exit();
  });
}, 6000);
