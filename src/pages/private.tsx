import React from 'react';
import Router from 'next/router';
import { NextPageContext } from 'next';

const Redirect = (context: NextPageContext, target: string) => {
   if (!context.res) {
      Router.replace(target);
   }

   context.res.writeHead(303, { location: target });
   context.res.end();
};

const PrivateRoute = (Component: React.FC) => {
   const isAuthenticated = false;

   class PrivateComponent extends React.Component {
      static async getInitialProps({ ...context }: NextPageContext) {
         if (!isAuthenticated) {
            Redirect(context, '/login');
         }

         return <Component />;
      }
   }

   return PrivateComponent;
};

export default PrivateRoute;
