import styles from '../styles/home.module.scss';
import Header from '../components/Header';
import useNavigation from '../hooks/useNavigation';
import Calendar from './calendar';
import Interview from './interview';

const Home: React.FC = ({ children }) => {
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
