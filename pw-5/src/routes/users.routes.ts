import {Router} from 'express';
import {createMiddleware, updateMiddleware} from '../shared/middlewares/validation/users.validation.middlewares.js';
import * as controller from '../controllers/users.controllers.js';

// eslint-disable-next-line new-cap
export const userRouter = Router();

userRouter.post('/', createMiddleware, controller.post);

userRouter.get('/:userId', controller.get);
userRouter.get('/', controller.get);

userRouter.put('/:userId', updateMiddleware, controller.put);
userRouter.delete('/:userId', controller.remove);
