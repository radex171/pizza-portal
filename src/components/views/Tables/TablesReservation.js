import React from 'react';
import styles from './Tables.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';



const TablesReservation = () =>{
  
  const randomNumber = Math.floor(Math.random()*100+1);
  const state = {
    TableEventsId: randomNumber,
  };

  return(
    <div className={styles.component}>
      <h2>Rezerwacje stolików</h2>
      <Link to ={'/panel/tables/booking/' + state.TableEventsId }>rezerwacja nr {state.TableEventsId}</Link>
    </div>
  );
};
TablesReservation.propTypes = {
  TableEventsId: PropTypes.string,
};

export default TablesReservation;