import fs from 'fs';
import {promisify} from 'util';
import path from 'path';
import axios, {type AxiosResponse} from 'axios';
import fse from 'fs-extra';

async function importHtmlContentToDir(dirPath: string, referencesList: string[]) {
    const htmlContent = await getHtmlContentByReferences(referencesList);

    htmlContent.map(async (value, index) => {
        await createFile(path.join(dirPath, `page-${index + 1}.html`), value);
    });
}

async function createFile(filePath: string, content: string) {
    const writeFile = promisify(fs.writeFile);
    await writeFile(filePath, content);
}

async function getHtmlContentByReferences(referencesList: string[]): Promise<string[]> {
    const responses: Array<AxiosResponse<string>>
		= await Promise.all(referencesList.map(async value => axios.get(value)));

    return responses.map(value => value.data);
}

async function createDirectory(dirName: string, creationPath: string) {
    const mkdir = promisify(fs.mkdir);
    const dirPath = path.join(creationPath, dirName);

    await fse.emptyDir(dirPath);
    await fse.ensureDir(dirPath);
    // Await mkdir(path.join(creationPath, dirName));
}

/**
 * @throws {Error} Throws an error if the specified path is wrong
 * @param filePath
 */
async function readJsonFile(filePath: string): Promise<string[]> {
    if (!path.basename(filePath).endsWith('.json')) {
        throw new Error('The path specified doesn\'t lead to JSON file');
    }

    let result: string[] = [];

    const readFile = promisify(fs.readFile);
    const data = await readFile(filePath, 'utf-8');

    result = JSON.parse(data) as string[];

    return result;
}

export default {importHtmlContentToDir, readJsonFile, createDirectory};
