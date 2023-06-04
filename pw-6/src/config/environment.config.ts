import dotenv from 'dotenv';
import * as fs from 'node:fs/promises';

const envFilePathFromRoot = './env/.env';

type EnvironmentVariables = {
    SERVER_PORT: number;
    DB_HOST: string;
    DB_PORT: number;
    DB_USERNAME: string;
    DB_PASSWORD: string;
    DB_DATABASE: string;
};

let environment: EnvironmentVariables;

export async function loadEnvFile() {
    try {
        if (!environment) {
            await fs.access(envFilePathFromRoot);
            dotenv.config({path: envFilePathFromRoot});
            environment = process.env as unknown as EnvironmentVariables;
        }

        return environment;
    } catch (error) {
        throw new Error('.env file not found');
    }
}
