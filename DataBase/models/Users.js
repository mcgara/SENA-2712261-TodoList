import connection from '../connection';
import fs from 'node:fs';
import useLogger from '../logger.js';

const logger = useLogger();
const model = 'Users.sql';

connection.query
