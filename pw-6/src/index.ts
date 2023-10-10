import {startServer} from './server.js';

try {
    await startServer();
} catch (err) {
    console.error('Failed to start server:', err);
    process.exit(1);
}
