import { useContext } from 'react';
import { UIContext } from '../store/ui/UIProvider';

const useAlert = () => {
   const context = useContext(UIContext);
   const { alert: Alert } = context;
   return { Alert };
};

export default useAlert;
