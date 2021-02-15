import styles from './index.module.scss';

import { isBefore, isAfter, format, parseISO, differenceInDays, addDays } from 'date-fns';
import { groupBy } from 'lodash';
import CandidateList from '../../components/CandidateList';
import useFetch from '../../hooks/useFetch';
import { GetStaticProps } from 'next';
import api from '../../config/axiosConfig';

interface Candidate {
   id: number;
   name: string;
   title: string;
   interviewStep: string;
   scheduledTime: string;
   status: string;
   image: string;
}

const Calendar = () => {
   const { data } = useFetch<Array<Candidate>>('/Calendar');

   const candidatesList = data?.map((item) => {
      const today = new Date();
      const candidateScheduledDate = parseISO(item.scheduledTime);

      if (isBefore(candidateScheduledDate, today)) {
         return {
            ...item,
            status: 'Done',
         };
      }

      return item;
   });

   const candidatesGroupedByStatus = Object.entries(groupBy(candidatesList, 'status'));

   const candidates = candidatesGroupedByStatus.map((calendar) => {
      return {
         title: calendar[0] === 'Scheduled' ? 'UpComing' : calendar[0],
         data: calendar[1],
      };
   });

   return (
      <main className={styles.calendar}>
         <CandidateList candidates={candidates} />
      </main>
   );
};

export default Calendar;
