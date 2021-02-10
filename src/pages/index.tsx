import React from 'react';

import styles from '../styles/home.module.scss';
import Header from '../components/Header';

const Home: React.FC = ({ children }) => {
   return (
      <div className={styles.home__container}>
         <Header title="Principal Product Manager @Driftwood sidecorp" />
         {children}
      </div>
   );
};

export default Home;
