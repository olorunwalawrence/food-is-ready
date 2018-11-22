import { Pool } from 'pg';
import dotenv from 'dotenv';
import connect from '../config/config';

const { production } = connect;
dotenv.config();



const pool = new Pool(production);

pool.connect().then(() => {
  console.log('database connected successfully');
}).catch((err) => {
  console.log(err);
});


export default pool;
