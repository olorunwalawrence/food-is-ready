import index from './index';

const requestModel = {
  requestTable() {
    const request = `
        CREATE TABLE IF NOT EXISTS request (
            requestid serial PRIMARY KEY,
            userid INTEGER REFERENCES users(userid),
            mealname VARCHAR(255) NOT NULL,
            price NUMERIC NOT NULL
          
            
  
        )
    `;
    return index.query(request);
  }
};


export default requestModel;
