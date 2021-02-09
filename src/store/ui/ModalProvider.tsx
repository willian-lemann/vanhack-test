import React, { createContext, useReducer, Dispatch } from 'react';

import { ModalReducer } from './Reducers/ModalReducer';

interface InitialState {}

export type ActionTypes = {
   type: '';
   payload: any;
};

export const INITIAL_STATE: InitialState = {};

const ModalContext = createContext<{
   state: InitialState | undefined;
   dispatch: Dispatch<any>;
}>({
   state: INITIAL_STATE,
   dispatch: () => null,
});

const ModalProvider: React.FC = ({ children }) => {
   const [state, dispatch] = useReducer(ModalReducer, INITIAL_STATE);

   return <ModalContext.Provider value={{ state, dispatch }}>{children}</ModalContext.Provider>;
};

export { ModalProvider, ModalContext };
