
import dotenv from 'dotenv';

dotenv.config(); 

export const DB_URL=process.env.DB_URL;
console.log(DB_URL)