import db from '../index';

export default {
  dropUserTable() {
    const userModel = `
    DROP TABLE IF EXISTS users CASCADE;`;
    return db.query(userModel);
  },

  dropMealTable() {
    const mealModel = 'DROP TABLE IF EXISTS meal CASCADE;';
    return db.query(mealModel);
  },

  dropRequestTable() {
    const requestModel = 'DROP TABLE IF EXISTS request CASCADE;';
    return db.query(requestModel);
  },
  dropOderTable() {
    const orderFoodTable = 'DROP TABLE IF EXISTS foodorders CASCADE;';
    return db.query(orderFoodTable);
  }

};
