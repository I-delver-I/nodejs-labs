import fs from 'node:fs/promises';
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
    await fs.writeFile(filePath, content);
    console.log(`File "${filePath}" created successfully.`);
}

async function getHtmlContentByReferences(referencesList: string[]): Promise<string[]> {
    const responses: Array<AxiosResponse<string>>
		= await Promise.all(referencesList.map(async value => axios.get(value)));

    return responses.map(value => value.data);
}

async function createDirectory(dirName: string, creationPath: string) {
    const dirPath = path.join(creationPath, dirName);

    await fse.ensureDir(dirPath);
    await fse.emptyDir(dirPath);
    console.log(`Directory "${dirPath}" created successfully.`);
}

/**
 * @throws {Error} Throws an error if the specified path is wrong
 * @param filePath
 */
async function readJsonFile(filePath: string) {
    const fileData = await fs.readFile(filePath, 'utf-8');

    return JSON.parse(fileData) as string[];
}

export default {importHtmlContentToDir, readJsonFile, createDirectory};
