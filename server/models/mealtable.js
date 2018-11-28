import index from './index';

const mealModel = {
  mealTable() {
    const meal = `
        CREATE TABLE IF NOT EXISTS meal (
            mealid SERIAL PRIMARY KEY,
            mealname VARCHAR(255) NOT NULL,
            price VARCHAR(255) NOT NULL,
            image TEXT NOT NULL,
            description VARCHAR(255) NOT NULL
        )
    `;
    return index.query(meal);
  }
};


export default mealModel;
