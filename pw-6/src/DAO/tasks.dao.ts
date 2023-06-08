import conn from '../datasource/db.datasource.js';

export async function getQueryResult(query: string): Promise<Array<Record<string, unknown>>> {
    return conn.connection.query(query);
}
