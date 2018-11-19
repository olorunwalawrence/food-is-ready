import index from './index';

const model = {

  signupTable() {
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
  }
};

export default model;