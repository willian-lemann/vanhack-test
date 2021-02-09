import React, { useContext } from 'react';
import { ModalContext } from '../store/ui/ModalProvider';

const useModal = () => {
   const context = useContext(ModalContext);
   const { state, dispatch } = context;
   return { state, dispatch };
};

export default useModal;
