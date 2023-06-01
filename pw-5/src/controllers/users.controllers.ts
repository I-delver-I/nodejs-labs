import {type NextFunction, type Request, type Response} from 'express';
import {type PartialUser, type User} from '../shared/types/users.types.js';
import * as Dao from '../DAO/users.dao.js';
import * as services from '../services/users.services.js';

export async function remove(req: Request, res: Response, next: NextFunction) {
    try {
        const userId = Number(req.params.userId);
        res.json(await Dao.removeUser(userId));
    } catch (err) {
        next(err);
    }
}

export async function put(req: Request, res: Response, next: NextFunction) {
    try {
        const userId = Number(req.params.userId);
        const userData = req.body as PartialUser;

        res.json(await services.put(userId, userData));
    } catch (err) {
        next(err);
    }
}

export async function get(req: Request, res: Response, next: NextFunction) {
    try {
        const userId = Number(req.params.userId);
        res.json(await services.get(userId));
    } catch (err) {
        next(err);
    }
}

export async function post(req: Request, res: Response, next: NextFunction) {
    try {
        const user = req.body as User;
        res.json(await Dao.createUser(user));
    } catch (err) {
        next(err);
    }
}
