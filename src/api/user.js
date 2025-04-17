import request from './index';

export const login = (data) => {
  return request.post('/user/login/', data);
};

