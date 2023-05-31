import * as Dao from '../DAO/users.dao.js';
import {type PartialUser, type User} from '../shared/types/users.types.js';

export async function get(userId?: number) {
    if (userId) {
        return Dao.getUserById(userId);
    }

    return Dao.getAllUsers();
}

export async function put(id: number, updatedData: PartialUser) {
    const oldUser = await Dao.getUserById(id);

    if (!oldUser) {
        return undefined;
    }

    const updatedUser: User = {
        id,
        username: updatedData.username ? updatedData.username : oldUser.username,
        name: updatedData.name ? updatedData.name : undefined,
    };

    return Dao.updateUser(updatedUser);
}
