import React from 'react';
import CalendarItem from '../CalendarItem';

import styles from './index.module.scss';

interface Calendar {
   id: number;
   name: string;
   title: string;
   interviewStep: string;
   scheduledTime: Date;
   status: string;
   image: string;
}

interface CalendarListProps {
   calendarList: Array<{
      title: string;
      data: Array<Calendar>;
   }>;
}

const CalendarList: React.FC<CalendarListProps> = ({ calendarList }) => {
   return (
      <ul className={styles.calendar__list}>
         <header className={styles.calendar__list__header}>
            <ul>
               <li>Candidate</li>

               <li>Interview Step</li>

               <li>Scheduled time</li>
            </ul>
             
         </header>

         {calendarList.map((calendar) => (
            <CalendarItem data={calendar} />
         ))}
      </ul>
   );
};

export default CalendarList;
