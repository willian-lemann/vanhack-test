import React from 'react';

import { UIProvider } from './ui';

const Provider: React.FC = ({ children }) => {
   return <UIProvider>{children}</UIProvider>;
};

export default Provider;
