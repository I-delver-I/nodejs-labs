import * as Dao from '../DAO/tasks.dao.js';
import * as query from '../datasource/queries.js';

export async function get(taskId: number) {
    switch (taskId) {
        case 1:
            return Dao.getQueryResult(query.task1Query);
        case 2:
            return Dao.getQueryResult(query.task2Query);
        case 3:
            return Dao.getQueryResult(query.task3Query);
        case 4:
            return Dao.getQueryResult(query.task4Query);
        case 5:
            return Dao.getQueryResult(query.task5Query);
        case 6:
            return Dao.getQueryResult(query.task6Query);
        default:
            return undefined;
    }
}
