import {type PartialUser, type User, type UserWithoutId} from '../shared/types/users.types';
import HttpError from '../shared/error.class.js';

class UsersRepository {
    #nextUserId = 1;

    #users: User[] = [];

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
        if (!this.isUsernameUnique(userToAdd.username)) {
            throw new HttpError('Username is already taken', 409);
        }

        userToAdd.id = this.#nextUserId++;
        this.#users.push(userToAdd as User);

        return userToAdd as User;
    }

    private isUsernameUnique(username: string) {
        return !this.#users.some(user => user.username === username);
    }
}

const usersRepository = new UsersRepository();
export default usersRepository;
