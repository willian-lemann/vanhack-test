import React, { createContext, Dispatch, SetStateAction, useState } from 'react';

interface InitialState {
   calendar: boolean;
   interview: boolean;
}

const NavigationContext = createContext<{
   state: InitialState;
   dispatch: Dispatch<SetStateAction<InitialState>>;
}>({
   state: {
      calendar: true,
      interview: false,
   },
   dispatch: () => null,
});

const NavigationProvider: React.FC = ({ children }) => {
   const [state, dispatch] = useState({
      calendar: true,
      interview: false,
   });

   return (
      <NavigationContext.Provider
         value={{
            state,
            dispatch,
         }}
      >
         {children}
      </NavigationContext.Provider>
   );
};

export { NavigationProvider, NavigationContext };
