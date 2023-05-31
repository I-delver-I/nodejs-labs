import {config} from 'dotenv';

config({path: './env/.env'});
export const {PORT} = process.env;
