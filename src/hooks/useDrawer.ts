import { useContext } from 'react';
import { DrawerContext } from '../store/ui/DrawerProvider';

const useDrawer = () => {
   const context = useContext(DrawerContext);
   const { ShowDrawer, CloseDrawer, visible } = context;
   return { ShowDrawer, CloseDrawer, visible };
};

export default useDrawer;
