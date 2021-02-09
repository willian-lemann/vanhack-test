import React from 'react';
import { Drawer, DrawerProps } from 'antd';
import useDrawer from '../../hooks/useDrawer';

const CustomDrawer: React.FC<DrawerProps> = ({ children, title, placement, closable = false }) => {
   const { CloseDrawer, visible } = useDrawer();

   return (
      <Drawer title={title} placement={placement} closable={closable} onClose={() => CloseDrawer()} visible={visible}>
         {children}
      </Drawer>
   );
};

export default CustomDrawer;
