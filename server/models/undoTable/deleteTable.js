import db from '../index';

export default {
  dropUserTable() {
    const userModel = `
    DROP TABLE IF EXISTS users CASCADE;`;
    return db.query(userModel);
  },
};
