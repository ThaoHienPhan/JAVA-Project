import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    'Content-Type': 'application/json',
    Authorization: localStorage.getItem('accessToken')
      ? `Bearer ${localStorage.getItem('accessToken')}`
      : '',
  },
});

axiosClient.interceptors.request.use(
  function (config) {
    const isLoggedOut = !localStorage.getItem('accessToken');

    if (isLoggedOut) {
      delete config.headers.Authorization;
    } else {
      config.headers.Authorization = localStorage.getItem('accessToken')
        ? `Bearer ${localStorage.getItem('accessToken')}`
        : '';
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    console.log('Error Response: ', error.response);
    const { config, status, data } = error.response;
    const URLs = ['/auth/local/register', '/auth/local'];
    if (URLs.includes(config.url) && status === 400) {
      const errorList = data.data || [];
      const firstError = errorList.length > 0 ? errorList[0] : {};
      const messageList = firstError.messages || [];
      const firstMessage = messageList.length > 0 ? messageList[0] : {};
      throw new Error(firstMessage.message);
    }
    return Promise.reject(error);
  }
);

//interceptor
export default axiosClient;
