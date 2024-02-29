import Spinner from '../components/Spinner';
import styles from './CitiesList.module.css';
import CitiItem from './CitiItem';
import Message from './Message';

const CitiesList = ({ cities, isLoading }) => {
  if (isLoading) return <Spinner />;
  // console.log('cities', cities, typeof cities);
  if (!cities.length) {
    return <Message message="Add your first city by clicking on a city on the map" />;
  }
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CitiItem city={city} key={city.id} />
      ))}
    </ul>
  );
};

export default CitiesList;
