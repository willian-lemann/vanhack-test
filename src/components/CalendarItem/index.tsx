import React from 'react';
import { format } from 'date-fns';

import styles from './index.module.scss';

import { FaEllipsisV } from 'react-icons/fa';

interface Calendar {
   id: number;
   name: string;
   title: string;
   interviewStep: string;
   scheduledTime: Date;
   status: string;
   image: string;
}

interface CalendarItemProps {
   data: {
      title: string;
      data: Array<Calendar>;
   };
}

const CalendarItem: React.FC<CalendarItemProps> = ({ data: { title, data } }) => {
   const GetFormattedData = (date: Date) => {
      return format(new Date(date), 'E, LLL, ho-paa');
   };

   return (
      <li className={styles.calendar__item}> 
         <header>{title}</header>
         <ul>
            {data.map((item) => (
               <li key={item.id}>
                  <div className={styles.candidate__info__container}>
                     <img src={item.image} alt="image of a candidate" />
                     <div className={styles.candidate__info__content}>
                        <span>{item.name}</span>
                        <span>{item.title}</span>
                     </div>
                  </div>

                  <div className={styles.candidate__step}>
                     <span>{item.interviewStep}</span>
                  </div>

                  <div className={styles.candidate__schedule}>
                     {item.status !== 'Waiting Confirmation' ? (
                        <span>{GetFormattedData(item.scheduledTime)}</span>
                     ) : (
                        <span className={styles.waiting__confirmation}>{item.status}</span>
                     )}
                  </div>

                  <div className={styles.interview__link}>
                     {item.status !== 'Waiting Confirmation' && (
                        <a className={styles.get__interview__link}>Get interview link</a>
                     )}
                  </div>

                  <div className={styles.actions}>
                     <FaEllipsisV size={20} color="#58636D" />
                  </div>
               </li>
            ))}
         </ul>
      </li>
   );
};

export default CalendarItem;
