import React from 'react';

import styles from './index.module.scss';

interface Calendar {
   id: 0;
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
   return (
      <li className={styles.calendar__item}>
         <header>{title}</header>
         <ul>
            {data.map((item) => (
               <li key={item.id}>{item.name}</li>
            ))}
         </ul>
      </li>
   );
};

export default CalendarItem;
