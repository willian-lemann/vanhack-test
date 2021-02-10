import { useRouter } from 'next/router';

import styles from './index.module.scss';

import { FiInfo } from 'react-icons/fi';
import { useState } from 'react';

interface HeaderProps {
   title?: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
   const { pathname, push } = useRouter();

   return (
      <div className={styles.header}>
         <section className={styles.header__title__section}>
            <div className={styles.header__title__container}>
               <span>{title}</span>
               <FiInfo size={20} />
            </div>

            <div className={styles.header__actions}>
               <button className={styles.header__actions__button}>Edit job</button>
               <div className={styles.header__actions__images}>
                  <img src="person1.png" alt="picture of a person" />
                  <img src="person2.png" alt="picture of a person" />
                  <img src="person3.png" alt="picture of a person" />
                  <span className={styles.header__actions__empty}>+3</span>
               </div>
            </div>
         </section>
         <section className={styles.header__nav__section}>
            <a className={pathname === '/calendar' ? styles.active : null} onClick={() => push('/calendar')}>
               Calendar
            </a>

            <a className={pathname === '/interview' ? styles.active : null} onClick={() => push('/interview')}>
               Next Interviews
            </a>
         </section>
      </div>
   );
};

export default Header;
