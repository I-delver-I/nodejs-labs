import {type NextFunction, type Request, type Response} from 'express';
import * as services from '../services/tasks.services.js';

export async function get(req: Request, res: Response, next: NextFunction) {
    try {
        const taskId = Number(req.params.taskId);
        const rows = await services.get(taskId) as Array<Record<string, unknown>>;

        if (!rows) {
            res.status(404).send('<h1>Unknown task id</h1>');
            return;
        }

        res.set('Content-Type', 'text/html');

        res.status(200).send(`
            <html lang="en">
                <body>
                    <h1>${req.url?.replace('/', '')}</h1>
                    <table>
                        <tr>
                            <th>${Object.keys(rows[0]).join('</th><th>')}</th>
                        </tr>
                        ${generateTableRows(rows)}
                    </table>
                </body>
            </html>
        `);
    } catch (err) {
        next(err);
    }
}

function generateTableRows(rows: Array<Record<string, unknown>>): string {
    return rows
        .map(row => {
            const cells = Object.values(row).map(value => `<td>${String(value)}</td>`).join('');
            return `<tr>${cells}</tr>`;
        })
        .join('');
}
