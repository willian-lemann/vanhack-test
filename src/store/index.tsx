import React from 'react';

import { NavigationProvider } from './navigation/NavigationProvider';

const Provider: React.FC = ({ children }) => {
   return <NavigationProvider>{children}</NavigationProvider>;
};

export default Provider;
