import { request, config } from '../utils';

const { api } = config;
const { buy, rate } = api;

export async function sendBuyService(data) {
  return request({
    url: buy,
    method: 'post',
    data,
  });
}
export async function getRate(data) {
  return request({
    url: rate,
    method: 'get',
    data,
  });
}
