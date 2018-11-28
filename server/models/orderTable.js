import index from './index';

const orderModel = {
  orderTable() {
    const foodorder = `
        CREATE TABLE IF NOT EXISTS foodorders (
            orderid SERIAL PRIMARY KEY,
            fullname VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL,
            phone VARCHAR(255) NOT NULL,
            address VARCHAR(255) NOT NULL,
            bstop VARCHAR(255) NOT NULL,
            lga VARCHAR(255) NOT NULL,
            userid INTEGER REFERENCES users(userid)
          

        )
    `;
    return index.query(foodorder);
  }
};

export default orderModel;
