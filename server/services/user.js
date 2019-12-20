const mysql = require('mysql');
const data = require('../../config/index');

// const connection = mysql.createConnection(data.Mysql);

// connection.connect();

function getService() {
  // return new Promise((resolve, reject) => {
  //   connection.query('SELECT * FROM user', (err, result) => {
  //     if (err) {
  //       reject(err);
  //     }
  //     resolve(result);
  //   });
  // });
}

export default {
  getService
};
