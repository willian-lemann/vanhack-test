import styles from './index.module.scss';

import CandidateList from '../CandidateList';
import Loading from 'react-loading';

import useFetch from '../../hooks/useFetch';

interface Candidate {
   id: number;
   name: string;
   title: string;
   interviewStep: string;
   scheduledTime: Date;
   status: string;
   image: string;
}

const Interview = () => {
   const { data } = useFetch<Array<Candidate>>('/Interview/future');

   const candidates = [{ data }];

   return (
      <main className={styles.interview}>
         <CandidateList candidates={candidates} />
      </main>
   );
};

export default Interview;
