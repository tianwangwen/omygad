// wrap superagent, it provide easy implementation for service

import request from 'superagent';

import config from '../../config';

function ajax(options) {
  const defaults = {
    url: null,
    type: 'post',
    data: {},
    'Content-Type': 'application/json'
  };

  options = Object.assign({}, defaults, options);

  // server render first screen
  // domain is required for node http request
  const isNode = typeof window === 'undefined';
  if (isNode) {
    options.url = config.Local.domain + options.url;
  }

  const promise = request[options.type](options.url).withCredentials();

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

const del = (url, data) => ajax({
  url,
  data,
  type: 'delete'
});

export default {
  ajax,
  get,
  post,
  put,
  del
};
