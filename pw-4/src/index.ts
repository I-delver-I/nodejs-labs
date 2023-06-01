import t1 from './1-task.js';
import t2 from './2-task.js';
import t3 from './3-task.js';
import t4 from './4-task.js';
import MyEventEmitter from './5-task.js';
import path from 'path';

// await run1Task();
// await run2Task();

// npm run start-task-3
// await run3Task();

// npm run start-task-4
// await run4Task();

await start5Task();

async function run1Task() {
    const array: string[] = ['one', 'two', 'three'];

    const results
        = await t1.runSequent(array, async (item, index) =>
            Promise.resolve({
                item,
                index,
            }),
        );

    console.log(results);
}

async function run2Task() {
    const array = [1, 2, 3, 6, 7, 9];
    const deletedElements
        = t2.arrayChangeDelete(array, item => item % 2 === 0);
    console.log(deletedElements);
    console.log(array);
}

async function run3Task() {
    const lastCommandLineArgument = process.argv[process.argv.length - 1];

    const dashSymbolCount = 1;
    const jsonFilePath = lastCommandLineArgument.slice(dashSymbolCount);
    const jsonFileDir = path.dirname(jsonFilePath);
    const jsonFileName = path.basename(jsonFilePath);

    const dirName = `${jsonFileName}_pages`;

    try {
        const referencesList = await t3.readJsonFile(jsonFilePath);

        if (!referencesList) {
            console.log();
        }

        await t3.createDirectory(dirName, jsonFileDir);
        const createdDirPath = path.join(jsonFileDir, dirName);
        await t3.importHtmlContentToDir(createdDirPath, referencesList);
    } catch (error) {
        console.log(error);
    }
}

async function run4Task() {
    const dashSymbolCount = 1;
    const lastCommandLineArgument = process.argv[process.argv.length - 1];
    const frequency = lastCommandLineArgument.slice(dashSymbolCount);

    if (Number.isNaN(Number(frequency))) {
        console.log('Provided parameter is not a number');
        return;
    }

    setInterval(t4.logSystemInfo, Number(frequency));
}

async function start5Task() {
    const emitter = new MyEventEmitter();

    emitter.registerHandler('userUpdated', () => {
        console.log('Обліковий запис користувача оновлено');
    });
    emitter.emitEvent('userUpdated'); // Обліковий запис користувача оновлено
}
