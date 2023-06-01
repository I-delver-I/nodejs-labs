import express from 'express';
import * as envConfig from './config/environment.config.js';
import {handleError} from './shared/middlewares/common.middlware.js';
import {userRouter} from './routes/users.routes.js';

export async function startServer() {
    const app = express();

    await envConfig.loadEnvFile();
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const {PORT} = process.env;
    const portToListen = parseInt(PORT, 10);

    app.use(express.json());
    app.use(express.urlencoded({extended: true}));

    app.use('/users', userRouter);

    app.use(handleError);
    app.listen(portToListen, () => {
        console.log('Server is running');
    });
}
