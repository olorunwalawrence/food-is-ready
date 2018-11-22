import index from './index';

const mealModel = {
  mealTable() {
    const meal = `
        CREATE TABLE IF NOT EXISTS meal (
            mealid serial PRIMARY KEY,
            mealname VARCHAR(255) NOT NULL,
            price NUMERIC NOT NULL,
            availability VARCHAR NOT NULL
        )
    `;
    return index.query(meal);
  }
};


mealModel.mealTable().then(() => {
  console.log('meal table created successfully');
}).catch((err) => {
  console.log(err.message);
});

export default mealModel;
