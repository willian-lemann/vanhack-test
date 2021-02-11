import React from 'react';
import CalendarItem from '../CalendarItem';

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

interface CalendarListProps {
   calendarList: Array<{
      title: string;
      data: Array<Calendar>;
   }>;
}

const CalendarList: React.FC<CalendarListProps> = ({ calendarList }) => {
   return (
      <ul className={styles.calendar__list}>
         {calendarList.map((calendar) => (
            <CalendarItem data={calendar} />
         ))}
      </ul>
   );
};

export default CalendarList;
