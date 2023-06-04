import * as Dao from '../DAO/tasks.dao.js';

export async function get(taskId: number) {
    switch (taskId) {
        case 1:
            return Dao.run1TaskQuery();
        case 2:
            return Dao.run2TaskQuery();
        case 3:
            return Dao.run3TaskQuery();
        case 4:
            return Dao.run4TaskQuery();
        case 5:
            return Dao.run5TaskQuery();
        case 6:
            return Dao.run6TaskQuery();
        default:
            return undefined;
    }
}
