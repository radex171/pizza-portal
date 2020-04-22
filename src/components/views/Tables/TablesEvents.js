import React from 'react';
import styles from './Tables.module.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';



const TablesEvents = () =>{
  
  const randomNumber = Math.floor(Math.random()*100+1);
  const state = {
    TableEventsId: randomNumber,
  };

  return(
    <div className={styles.component}>
      <h2>Eventy przypisane do stolików</h2>
      <Link to ={'/panel/tables/events/' + state.TableEventsId }>rezerwacja nr {state.TableEventsId}</Link>
    </div>
  );
};
TablesEvents.propTypes = {
  TableEventsId: PropTypes.string,
};

export default TablesEvents;