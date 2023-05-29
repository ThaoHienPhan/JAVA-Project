import axios from 'axios';

const token = localStorage.getItem('accessToken');

const axiosClient = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    'Content-Type': 'application/json',
    Authorization: token && `Bearer ${token}`,
  },
});

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
