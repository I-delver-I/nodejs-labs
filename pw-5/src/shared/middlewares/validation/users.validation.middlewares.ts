import {validateRequest} from './common.validation.middleware.js';
import * as usersJoi from '../../JOI/users.joi.js';

export const createMiddleware = validateRequest([{schema: usersJoi.createSchema, part: 'body'}]);
export const updateMiddleware = validateRequest([{schema: usersJoi.updateSchema, part: 'body'}]);
