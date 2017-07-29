import { request, config } from '../utils';

const { api } = config;
const { winList, banbleDetail, mine, flow, apply, approve } = api;

export async function getWinListDetail(data) {
  return request({
    url: winList,
    method: 'get',
    data,
  });
}

export async function getBalanceDetail() {
  return request({
    url: banbleDetail,
    method: 'get',
  });
}
export async function getMine(data) {
  return request({
    url: mine,
    method: 'get',
    data,
  });
}
export async function getFlow(data) {
  return request({
    url: flow,
    method: 'get',
    data,
  });
}
export async function getApply(data) {
  return request({
    url: apply,
    method: 'post',
    data,
  });
}
export async function getApprove(data) {
  return request({
    url: approve,
    method: 'get',
    data,
  });
}
export async function applyApprove(data) {
  return request({
    url: approve,
    method: 'post',
    data,
  });
}
