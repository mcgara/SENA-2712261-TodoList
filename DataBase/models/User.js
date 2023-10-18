import connection from '../connection.js';
import useLogger from '../logger.js';

const logger = useLogger();

// Test Table User
export function runTest() {
  connection.query('SELECT * FROM User', (err, result) => {
    if (err) logger.log.error(`MySqlQuery %s: ${err.message}`, err.code);
    else if (result) logger.log.notice('%s', 'MySqlQuery: ' + result);
  })
}

export default {
  runTest
}
