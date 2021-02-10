import { useRouter } from 'next/router';

import styles from './index.module.scss';

import { FaInfoCircle, FaRegBuilding, FaUser, FaDollarSign, FaCode, FaMapMarkerAlt } from 'react-icons/fa';
import { Popover } from 'antd';

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
               <Popover
                  placement="rightTop"
                  trigger="click"
                  overlayClassName={styles.header__popover__overlay}
                  content={() => (
                     <div className={styles.header__popover}>
                        <section>
                           <FaRegBuilding size={20} />
                           <span> Driftwood sidecorp </span>
                        </section>
                        <section>
                           <FaUser size={20} />
                           <span> 1 Position </span>
                        </section>
                        <section>
                           <FaDollarSign size={20} />
                           <span> $CAD 100 - 140k </span>
                        </section>
                        <section>
                           <FaMapMarkerAlt size={20} />
                           <span> Remote </span>
                        </section>
                        <section>
                           <FaCode size={20} />
                           <ul>
                              <li>Machine Learning</li>
                              <li>Signal R</li>
                              <li>Dapper</li>
                              <li>Dapper</li>
                              <li>Dapper</li>
                           </ul>
                        </section>
                     </div>
                  )}
               >
                  <FaInfoCircle size={20} />
               </Popover>
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
