import useSwr from 'swr';
import api from '../config/axiosConfig';

const useFetch = <Data = any, Error = any>(resource: string) => {
   const { data, error } = useSwr<Data, Error>(
      resource,
      async (resource) => {
         const response = await api.get(resource);
         return response.data;
      },
      { errorRetryCount: 1, errorRetryInterval: 10000 }
   );

   return {
      data,
      error,
   };
};

export default useFetch;
