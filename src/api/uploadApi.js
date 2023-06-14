import axiosClient from './axios';

const uploadImage = async file => {
  const res = await axiosClient.post('/upload', file);
  return res;
};

export { uploadImage };
