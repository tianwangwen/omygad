const mysql = require('mysql');
const data = require('../../config/index');
const path = require('path');
const fs = require('fs');
const marked = require('marked');

// const connection = mysql.createConnection(data.Mysql);

// connection.connect();

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

function getMarkDmService() {
  return new Promise((resolve, reject) => {
    var path = './public/test.md';
    fs.readFile(path, function(err, data) {
        if (err) {
            console.log(err);
            reject(err);
        } else {
            console.log(data);
            var str = marked(data.toString())
            console.log('str --->', str);
            const result = {
              text: str,
            };
            resolve(result);
        }
    })
  });
}

export default {
  getService,
  getMarkDmService
};
