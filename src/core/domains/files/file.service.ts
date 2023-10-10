import axiosInstance from '@/core/configs/axios';
import { FileUploadResponse } from './file.types';

const URL_CONTROLLER = '/files';

export default {
  async upload(data: FormData) {
    const result = await axiosInstance.post<FileUploadResponse>(
      `${URL_CONTROLLER}`,
      data,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );

    return result.data;
  },
};
