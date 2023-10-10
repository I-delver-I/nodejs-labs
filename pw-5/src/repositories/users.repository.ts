import {type User, type UserWithoutId} from '../shared/types/users.types.js';
import HttpError from '../shared/error.class.js';

class UsersRepository {
    #nextUserId = 1;

    #users = new Map<number, User>();

    public async removeUser(userId: number) {
        const existingUser = this.#users.get(userId);

        if (!existingUser) {
            throw new HttpError('User is not found', 404);
        }

        this.#users.delete(userId);

        return 'User is removed';
    }

    public async updateUser(updatedUser: User) {
        const existingUser = this.#users.get(updatedUser.id);

        if (!existingUser) {
            throw new HttpError('User is not found', 404);
        }

        this.#users.set(updatedUser.id, updatedUser);

        return updatedUser;
    }

    public async getUserById(id: number) {
        return this.#users.get(id);
    }

    public async getAllUsers() {
        return [...this.#users.values()];
    }

    public async addUser(userToAdd: UserWithoutId) {
        if (!this.isUnique('username', userToAdd.username)) {
            throw new HttpError('Username is already taken', 409);
        }

        userToAdd.id = this.#nextUserId++;
        this.#users.set(userToAdd.id, userToAdd as User);

        return userToAdd as User;
    }

    public isUnique<T extends keyof User>(property: T, value: User[T]) {
        for (const user of this.#users.values()) {
            if (user[property] === value) {
                return false;
            }
        }

        return true;
    }
}

const usersRepository = new UsersRepository();
export default usersRepository;
