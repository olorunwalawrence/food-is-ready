
import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const config = {
  connectionString: process.env.DATABASE_URL,
  max: 10, // max number of clients in the pool
  idleTimeoutMillis: 30000
};

const client = new pg.Client(config);

client.connect().then(() => {
  console.log('database connected successfully');
}).catch((err) => {
  console.log(err);
});
export default client;
