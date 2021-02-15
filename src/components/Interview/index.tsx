import styles from './index.module.scss';

import CandidateList from '../CandidateList';

import useFetch from '../../hooks/useFetch';

interface Candidate {
   id: number;
   name: string;
   title: string;
   interviewStep: string;
   scheduledTime: string;
   status: string;
   image: string;
}

const Interview = () => {
   const { data } = useFetch<Array<Candidate>>('/Interview/future');

   const candidates = data.filter((candidate) => candidate.status !== 'Waiting Confirmation');

   return (
      <main className={styles.interview}>
         <CandidateList candidates={[{ data: candidates }]} />
      </main>
   );
};

export default Interview;
