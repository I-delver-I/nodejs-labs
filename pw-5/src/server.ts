import express from 'express';
import {PORT} from './config/config.js';
import {handleError} from './shared/middlewares/common.middlware.js';
import {userRouter} from './routes/users.routes.js';

const app = express();
const portToListen = parseInt(PORT!, 10);

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/users', userRouter);

app.use(handleError);
app.listen(portToListen, () => {
    console.log('Server is running');
});
