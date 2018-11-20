import { Pool } from 'pg';
import dotenv from 'dotenv';
import connect from '../config/config';

const { production } = connect;
dotenv.config();

const config = {
  production
};

const pool = new Pool(config);

pool.connect().then(() => {
  console.log('database connected successfully');
}).catch((err) => {
  console.log(err);
});


export default pool;
