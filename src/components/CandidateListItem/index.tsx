import React from 'react';
import { format } from 'date-fns';

import styles from './index.module.scss';

import { FaEllipsisV } from 'react-icons/fa';

interface Candidate {
   id: number;
   name: string;
   title: string;
   interviewStep: string;
   scheduledTime: string;
   status: string;
   image: string;
}

interface CandidateListItemProps {
   data: {
      title?: string;
      data: Array<Candidate>;
   };
}

class CandidateListItem extends React.Component<CandidateListItemProps> {
   state = {
      isUpComingCandidateExist: false,
   };

   componentDidMount() {
      const { data } = this.props.data;

      data.forEach((item) => {
         if (item.status === 'Scheduled') {
            this.setState({ isUpComingCandidateExist: true });
         } else {
            this.setState({ isUpComingCandidateExist: false });
         }
      });
   }

   render() {
      const GetFormattedData = (date: string) => {
         return format(new Date(date), 'E, LLL, ho-paa');
      };

      const { data, title } = this.props.data;

      return (
         <li className={styles.candidate__list__item}>
            {title && <header>{title}</header>}
            <ul className={this.state.isUpComingCandidateExist && styles.candidate__upcoming__item}>
               {data?.map((item) => (
                  <li key={item.id}>
                     <div className={styles.candidate__info__container}>
                        <img src={item.image} alt="profile image of a candidate" />
                        <div className={styles.candidate__info__content}>
                           <span>{item.name}</span>
                           <span>{item.title}</span>
                        </div>
                     </div>

                     <div className={styles.candidate__step}>
                        <span>{item.interviewStep}</span>
                     </div>

                     {item.status !== 'Waiting Confirmation' ? (
                        <div className={styles.candidate__schedule}>
                           <span>{GetFormattedData(item.scheduledTime)}</span>
                        </div>
                     ) : (
                        <div className={styles.candidate__waiting__confirmation}>
                           <span className={styles.waiting__confirmation}>{item.status}</span>
                        </div>
                     )}

                     <div className={styles.candidate__actions__container}>
                        <button className={styles.interview__link}>
                           {item.status !== 'Waiting Confirmation' && (
                              <a className={styles.get__interview__link}>
                                 {item.status === 'Done' ? 'Move to next step' : 'Get interview link'}
                              </a>
                           )}
                        </button>

                        {item.status === 'Done' && (
                           <button className={styles.candidate__actions__reject}>Reject</button>
                        )}
                     </div>

                     <FaEllipsisV size={18} color="#58636D" className={styles.candidate__actions__options} />
                  </li>
               ))}
            </ul>
         </li>
      );
   }
}

export default CandidateListItem;
