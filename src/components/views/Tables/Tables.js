import React from 'react';
import styles from './Tables.module.scss';
import {Link} from 'react-router-dom';
import DatePicker from '../../common/DatePicker/DatePicker';
const Tables = () =>{

 
  return(
    <div className={styles.component}>
      
      <h2>Tables Reservation:</h2>
      <DatePicker/>
      
      <Link to='/panel/tables/booking/new'>Zarezerwuj stolik </Link><br/>
      <Link to='/panel/tables/booking'>Lista zarezerwowanych stolików </Link><br/><br/>
      <Link to='/panel/tables/events/new'>Zarezerwuj Event </Link><br/>
      <Link to='/panel/tables/events/'>Lista zarezerwowanych eventów </Link><br/>
      
    </div>
  );};

export default Tables;