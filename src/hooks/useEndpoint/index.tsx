import axios from 'axios';
require('dotenv').config();

type EndpointParams = {
  endpoint: string;
  signal?: AbortSignal;
  token?: string;
};
type PostParams = EndpointParams & {
  data: any;
};
type PostMultipartParams = PostParams & {
  data: { [key: string]: any };
};

export default function useEndpoint() {
  async function get({ endpoint, token, signal }: EndpointParams) {
    const requestHeaders: HeadersInit = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    token && requestHeaders.set('authorization', `Bearer ${token}`);
    return fetch(`${process.env.REACT_APP_BACKEND_URL}${endpoint}`, {
      method: 'GET',
      headers: requestHeaders,
      signal
    }).then((response) => response.json());
  }

  async function post({ endpoint, data, token, signal }: PostParams): Promise<any> {
    const url = `${process.env.REACT_APP_BACKEND_URL}${endpoint}`;
    const requestHeaders: HeadersInit = new Headers({ 'Content-Type': 'application/json' });
    token && requestHeaders.set('authorization', `Bearer ${token}`);
    const response = await fetch(url, { method: 'POST', headers: requestHeaders, body: JSON.stringify(data), signal });
    return response.json();
  }

  async function postMultipart({ endpoint, data, token, signal }: PostMultipartParams) {
    const formData = new FormData();
    Object.keys(data).forEach((key) =>
      formData.append(key, data[key] instanceof File ? data[key] : JSON.stringify(data[key]))
    );
    const headers = { authorization: `Bearer ${token}` };
    return axios({
      method: 'post',
      url: endpoint,
      baseURL: process.env.REACT_APP_BACKEND_URL,
      data: formData,
      headers,
      signal
    });
  }

  return {
    get,
    post,
    postMultipart
  };
}
