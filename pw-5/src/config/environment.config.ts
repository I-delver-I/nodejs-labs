import dotenv from 'dotenv';
import * as fs from 'node:fs/promises';

const envFilePathFromRoot = './env/.env';

export async function loadEnvFile() {
    try {
        await fs.access(envFilePathFromRoot);
        dotenv.config({path: envFilePathFromRoot});
    } catch (error) {
        throw new Error('.env file not found');
    }
}
