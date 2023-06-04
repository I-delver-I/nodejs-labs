import conn from '../datasource/db.datasource.js';
import * as queries from '../datasource/queries.js';

export async function run1TaskQuery() {
    return conn.connection.query(queries.task1Query);
}

export async function run2TaskQuery() {
    return conn.connection.query(queries.task2Query);
}

export async function run3TaskQuery() {
    return conn.connection.query(queries.task3Query);
}

export async function run4TaskQuery() {
    return conn.connection.query(queries.task4Query);
}

export async function run5TaskQuery() {
    return conn.connection.query(queries.task5Query);
}

export async function run6TaskQuery() {
    return conn.connection.query(queries.task6Query);
}
