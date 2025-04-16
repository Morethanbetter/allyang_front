import request from './index';

export const login = (data) => {
  return request.post('/user/login', data);
};

export const getVerificationCode = (email) => {
  return request.post('/user/verification-code', { email });
};
