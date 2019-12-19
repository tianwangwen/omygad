const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12345678',
  database: 'omygad'
});

connection.connect();

function getService() {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM user', (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    });
  });
}

export default {
  getService
};
