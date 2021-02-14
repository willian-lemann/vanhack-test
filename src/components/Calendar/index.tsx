import React, { useEffect, useState } from 'react';
import api from '../../config/axiosConfig';

import styles from './index.module.scss';

import { groupBy } from 'lodash';
import CalendarList from '../../components/CalendarList';
import useFetch from '../../hooks/useFetch';

const Calendar: React.FC = () => {
   const { data } = useFetch('/Calendar');

   const calendarsGroupedByStatus = Object.entries(groupBy(data, 'status'));

   const calendars = calendarsGroupedByStatus.map((calendar) => {
      return {
         title: calendar[0] === 'Scheduled' ? 'UpComing' : calendar[0],
         data: calendar[1],
      };
   });

   console.log(calendars);
   return (
      <main className={styles.calendar}>
         <CalendarList calendarList={calendars} />
      </main>
   );
};

export default Calendar;
