// wrap superagent, it provide easy implementation for service

import request from 'superagent';

import config from '../../config';

// this will be the config name of different service server
// eg: JAVA, means the data come from JAVA server
const JAVA = config.Service.domain; // TODO rename

function ajax(options) {
  const defaults = {
    host: JAVA,
    url: null,
    type: 'post',
    data: {},
    'Content-Type': 'application/json'
  };

  options = Object.assign({}, defaults, options);

  const url = options.host + options.url;
  const promise = request[options.type](url).withCredentials();

  // set superagent request header
  Object.keys(options).forEach((key) => {
    if (!key.match(/url|type|data/)) {
      promise.set(key, options[key]);
    }
  });

  // set superagent timeout
  promise.timeout({
    response: 5000,
    deadline: 60000
  });

  return new Promise((resolve, reject) => {
    promise.send(options.data).then((res) => {
      resolve(res.body);
    }).catch((err) => {
      reject(err);
    });
  });
}

const get = url => ajax({
  url,
  type: 'get'
});

const post = (url, data) => ajax({
  url,
  data,
  type: 'post'
});

const put = (url, data) => ajax({
  url,
  data,
  type: 'put'
});

const del = (url) => ajax({
  url,
  type: 'delete'
});

export default {
  ajax,
  get,
  post,
  put,
  del
};
