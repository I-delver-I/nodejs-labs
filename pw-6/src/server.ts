import express from 'express';
import {handleError} from './shared/middlewares/common.middlware.js';
import taskRouter from './routes/tasks.routes.js';
import conn from './datasource/db.datasource.js';
import dbConfig from './config/db.config.js';

export async function startServer() {
    try {
        const app = express();

        const portToListen = dbConfig.SERVER_PORT;
        app.use(express.json());
        app.use(express.urlencoded({extended: true}));

        await conn.connectToDb();

        app.use('/tasks', taskRouter);

        app.use(handleError);
        app.listen(portToListen, () => {
            console.log('Server is running');
        });
    } catch (err) {
        console.error('Error starting server:', err);
    }
}
