import { useContext } from 'react';
import { UIContext } from '../store/ui/UIProvider';

const useResponsive = () => {
   const context = useContext(UIContext);
   const { responsive } = context;
   return { responsive };
};

export default useResponsive;
