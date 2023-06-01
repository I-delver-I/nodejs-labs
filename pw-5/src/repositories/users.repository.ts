import {type User, type UserWithoutId} from '../shared/types/users.types.js';
import HttpError from '../shared/error.class.js';

class UsersRepository {
    #nextUserId = 1;

    #users: User[] = [];

    public async removeUser(userId: number) {
        const existingUserIndex = this.#users.findIndex(user => user.id === userId);

        if (existingUserIndex === -1) {
            throw new HttpError('User is not found', 404);
        }

        this.#users.splice(existingUserIndex, 1);

        return 'User is removed';
    }

    public async updateUser(updatedUser: User) {
        this.#users = this.#users.map(user => (user.id === updatedUser.id ? updatedUser : user));

        return updatedUser;
    }

    public async getUserById(id: number) {
        return this.#users.find(user => user.id === id);
    }

    public async getAllUsers() {
        return [...this.#users];
    }

    public async addUser(userToAdd: UserWithoutId) {
        if (!this.isUnique('username', userToAdd.username)) {
            throw new HttpError('Username is already taken', 409);
        }

        userToAdd.id = this.#nextUserId++;
        this.#users.push(userToAdd as User);

        return userToAdd as User;
    }

    public isUnique<T extends keyof User>(property: T, value: User[T]) {
        return !this.#users.some(user => user[property] === value);
    }
}

const usersRepository = new UsersRepository();
export default usersRepository;
