import {type DataSourceOptions} from 'typeorm';
import * as envConfig from './environment.config.js';

// eslint-disable-next-line @typescript-eslint/naming-convention
const {DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    DB_DATABASE, SERVER_PORT} = await envConfig.loadEnvFile();

const dbOptions: DataSourceOptions
= {
    type: 'postgres',
    host: DB_HOST,
    port: DB_PORT,
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    synchronize: true,
};

// eslint-disable-next-line @typescript-eslint/naming-convention
export default {dbOptions, DB_PASSWORD, DB_DATABASE, DB_HOST, DB_PORT, DB_USERNAME,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    SERVER_PORT};
