const fs = require('fs');
const marked = require('marked');

const path = './public/';

function getMarkDmService(filename) {
  return new Promise((resolve, reject) => {
    const targetFile = `${path}${filename}`;
    fs.readFile(targetFile, (err, data) => {
      if (err) {
        reject(err);
      } else {
        const str = marked(data.toString());
        const result = {
          data: str
        };
        resolve(result);
      }
    });
  });
}

export default {
  getMarkDmService
};
