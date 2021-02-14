import styles from '../styles/home.module.scss';
import Header from '../components/Header';
import useNavigation from '../hooks/useNavigation';
import Calendar from '../components/Calendar';
import Interview from '../components/Interview';

const Home: React.FC = () => {
   const {
      navigation: { calendar, interview },
   } = useNavigation();

   return (
      <div className={styles.home__container}>
         <Header title="Principal Product Manager @Driftwood sidecorp" />
         {calendar && <Calendar />}
         {interview && <Interview />}
      </div>
   );
};

export default Home;
