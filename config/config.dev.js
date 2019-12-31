/* eslint-disable */
const LOCAL_HOST = '127.0.0.1';
const LOCAL_PORT = process.env.port || 3000;
const SERV_HOST = '127.0.0.1';
const SERV_PORT = 3004;

export default {
  // node env
  Local: {
    host: LOCAL_HOST,
    port: LOCAL_PORT,
    domain: 'http://' + LOCAL_HOST + ':' + LOCAL_PORT
  },

  // service env
  Service: {
    host: SERV_HOST,
    port: SERV_PORT,
    domain: 'http://' + SERV_HOST + ':' + SERV_PORT
  },

  Mysql: {
    host: 'localhost',
    user: 'root',
    password: '12345678',
    database: 'omygad'
  }
}
