import useSwr from 'swr';
import api from '../config/axiosConfig';

const useFetch = (resource: string) => {
   const { data, error } = useSwr(resource, async (resource) => {
      const response = await api.get(resource);
      return response.data;
   });

   return {
      data,
      error,
   };
};

export default useFetch;
