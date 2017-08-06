import { request, config } from '../utils';

const { api } = config;
const { userLogin, userSignIn } = api;

export async function login(data) {
  return request({
    url: userLogin,
    method: 'post',
    data,
  });
}
export async function signIn(data) {
  return request({
    url: userSignIn,
    method: 'post',
    data,
  });
}
