import { useContext } from 'react';

import { NavigationContext } from '../store/navigation/NavigationProvider';

const useNavigation = () => {
   const context = useContext(NavigationContext);
   const { state, dispatch } = context;
   return {
      navigation: state,
      setNavigation: dispatch,
   };
};

export default useNavigation;
