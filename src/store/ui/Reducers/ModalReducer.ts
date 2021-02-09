import { INITIAL_STATE, ActionTypes } from '../ModalProvider';

export const ModalReducer = (state = INITIAL_STATE, action: ActionTypes) => {
   switch (action.type) {
      case '':
         return { ...state };

      default:
         return { ...state };
   }
};
