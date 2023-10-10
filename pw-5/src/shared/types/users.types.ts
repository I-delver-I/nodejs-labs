import {type DeepPartial} from 'typeorm';

export type User = {
    id: number;
    username: string;
    name?: string;
};

export type UserWithoutId = {id?: number} & Omit<User, 'id'>;
export type PartialUser = DeepPartial<User>;
