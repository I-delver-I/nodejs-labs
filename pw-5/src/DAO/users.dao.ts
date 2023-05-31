import {type PartialUser, User, type UserWithoutId} from '../shared/types/users.types.js';
import repository from '../repositories/users.repository.js';

export async function createUser(user: UserWithoutId) {
    return repository.addUser(user);
}

export async function getUserById(id: number) {
    return repository.getUserById(id);
}

export async function getAllUsers() {
    return repository.getAllUsers();
}

export async function updateUser(updatedData: User) {
    return repository.updateUser(updatedData);
}
