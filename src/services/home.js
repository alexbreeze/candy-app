import { request, config } from '../utils';

const { api } = config;
const { buy } = api;

export async function sendBuyService(data) {
  return request({
    url: buy,
    method: 'post',
    data,
  });
}
