import {Router} from 'express';
import * as controllers from '../controllers/tasks.controllers.js';

// eslint-disable-next-line new-cap
const taskRouter = Router();

taskRouter.get('/:taskId', controllers.get);

export default taskRouter;
