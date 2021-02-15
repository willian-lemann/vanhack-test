import React from 'react';
import CandidateListItem from '../CandidateListItem';

import styles from './index.module.scss';

interface Candidate {
   id: number;
   name: string;
   title: string;
   interviewStep: string;
   scheduledTime: string;
   status: string;
   image: string;
}

interface CandidateListProps {
   candidates: Array<{
      title?: string;
      data: Array<Candidate>;
   }>;
}

class CandidateList extends React.Component<CandidateListProps> {
   render() {
      return (
         <ul className={styles.candidate__list}>
            <header className={styles.candidate__list__header}>
               <ul>
                  <li>Candidate</li>

                  <li>Interview Step</li>

                  <li>Scheduled time</li>
               </ul>
            </header>

            {this.props.candidates.map((candidate, index) => (
               <CandidateListItem key={index} data={candidate} />
            ))}
         </ul>
      );
   }
}

export default CandidateList;
