import React, { useEffect, useState, createContext } from 'react';

import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer, toast } from 'react-toastify';

import { AlertTypes } from './Actions/Types';

import { ModalProvider } from './ModalProvider';
import { DrawerProvider } from './DrawerProvider';

const UIContext = createContext<{
   responsive: boolean;
   alert: (message: string, type: AlertTypes) => any;
}>({
   responsive: false,
   alert: () => null,
});

const UIProvider: React.FC = ({ children }) => {
   const [responsive, setResponsive] = useState(false);

   const alert = (message: string, type: AlertTypes) => toast(message, { type });

   useEffect(() => {
      if (window.innerWidth < 1000) {
         setResponsive(true);
      }
   }, [responsive]);

   return (
      <UIContext.Provider value={{ responsive, alert }}>
         <DrawerProvider>
            <ToastContainer
               position="top-right"
               autoClose={5000}
               hideProgressBar={false}
               newestOnTop={false}
               closeOnClick
               rtl={false}
               pauseOnFocusLoss
               draggable
               pauseOnHover
            />
            <ModalProvider>{children}</ModalProvider>
         </DrawerProvider>
      </UIContext.Provider>
   );
};

export { UIProvider, UIContext };
