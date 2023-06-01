import * as Dao from '../DAO/users.dao.js';
import {type PartialUser, type User} from '../shared/types/users.types.js';

export async function get(userId?: number) {
    if (userId) {
        return Dao.getUserById(userId);
    }

    return Dao.getAllUsers();
}

export async function put(id: number, updatedUserData: PartialUser) {
    const oldUser = await Dao.getUserById(id);

    if (!oldUser) {
        return undefined;
    }

    const updatedUser: User = {
        id,
        username: updatedUserData.username ? updatedUserData.username : oldUser.username,
        name: updatedUserData.name ? updatedUserData.name : undefined,
    };

    return Dao.updateUser(updatedUser);
}
