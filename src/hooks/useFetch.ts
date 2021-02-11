import useSwr from 'swr';

const useFetch = (url: string) => {
   const { data, error } = useSwr(url, async (url) => {
      const response = await fetch(url);
      const data = await response.json();

      return data;
   });

   return {
      data,
      error,
   };
};

export default useFetch;
