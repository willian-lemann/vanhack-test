import React, { useState, createContext } from 'react';

const DrawerContext = createContext<{
   ShowDrawer: Function;
   CloseDrawer: Function;
   visible: boolean;
}>({
   ShowDrawer: () => null,
   CloseDrawer: () => null,
   visible: false,
});

const DrawerProvider: React.FC = ({ children }) => {
   const [visible, setVisible] = useState(false);

   const ShowDrawer = () => {
      setVisible(true);
   };

   const CloseDrawer = () => {
      setVisible(false);
   };

   return (
      <DrawerContext.Provider
         value={{
            ShowDrawer,
            CloseDrawer,
            visible,
         }}
      >
         {children}
      </DrawerContext.Provider>
   );
};

export { DrawerProvider, DrawerContext };
