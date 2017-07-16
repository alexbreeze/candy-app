import { request, config } from '../utils';

const { api } = config;
const { openList, lotteryList } = api;

export async function getOpenListDetail(data) {
  return request({
    url: openList,
    method: 'get',
    data,
  });
}

export async function getOpenList() {
  return request({
    url: lotteryList,
    method: 'get',
  });
}
