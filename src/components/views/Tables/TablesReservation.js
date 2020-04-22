import React from 'react';
import styles from './Tables.module.scss';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';

const demoReservation =  [
  { hour: '12:00', table1: 'free', table2: 'reserv 35', table3: 'reserv: 36'},
  { hour: '12:30', table1: 'free', table2: 'reserv: 35', table3: 'reserv: 36'},
  { hour: '13:00', table1: 'event: 21', table2: 'reserv: 37', table3: 'reserv: 38'},
  { hour: '13:30', table1: 'reserv: 39', table2: 'event: 22', table3: 'reserv: 38'},
  { hour: '14:00', table1: 'reserv: 39', table2: 'event: 22', table3: 'reserv: 38'},
  { hour: '14:30', table1: 'free', table2: 'event: 23', table3: 'reserv: 40'},
  { hour: '15:00', table1: 'reserv: 41', table2: 'reserv: 42', table3: 'event: 24'},
  { hour: '15:30', table1: 'reserv: 41', table2: 'reserv: 42', table3: 'event: 24'},
  { hour: '16:00', table1: 'reserv: 41', table2: 'free', table3: 'reserv: 43'},
  { hour: '16:30', table1: 'free', table2: 'free', table3: 'reserv: 43'},
  { hour: '17:00', table1: 'free', table2: 'reserv: 44', table3: 'reserv: 43'},
  { hour: '17:30', table1: 'event: 25', table2: 'reserv: 44', table3: 'reserv: 45'},
  { hour: '18:00', table1: 'event: 25', table2: 'reserv: 46', table3: 'reserv: 45'},
  { hour: '18:30', table1: 'free', table2: 'reserv: 46', table3: 'free'},
  { hour: '19:00', table1: 'free', table2: 'reserv: 46', table3: 'reserv: 47'},
  { hour: '19:30', table1: 'free', table2: 'reserv: 46', table3: 'free'},
  { hour: '20:00', table1: 'reserv: 48', table2: 'reserv: 49', table3: 'free'},
  { hour: '20:30', table1: 'reserv: 48', table2: 'reserv: 50', table3: 'reserv: 51'},
  { hour: '21:00', table1: 'reserv: 48', table2: 'reserv: 50', table3: 'reserv: 51'},
  { hour: '21:30', table1: 'free', table2: 'reserv: 52', table3: 'free'},
  { hour: '22:00', table1: 'reserv: 53', table2: 'reserv: 52', table3: 'free'},
  { hour: '22:30', table1: 'reserv: 53', table2: 'reserv: 52', table3: 'reserv: 54'},
  { hour: '23:00', table1: 'free', table2: 'free', table3: 'free'},
  { hour: '23:30', table1: 'free', table2: 'free', table3: 'free'},
];

const renderCheck = status => {
  switch (status) {
    case 'free':
      return (
        <>
          <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/booking/new`}>Res. Table </Button><br/>
          <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/events/new`}>Res. Events </Button>
        </>
      );
    default:
      return status;
  }
};

const TablesReservation = () => {

  return (
    <div className={styles.title}><span >Rezerwacje </span><br/><br/>
      <Paper className={styles.component}>
        <Table>
          <TableHead> 
            <TableRow >
              <TableCell >Godzina</TableCell>
              <TableCell className={styles.tableCell}>Stolik 1</TableCell>
              <TableCell > Stolik 2</TableCell>
              <TableCell >Stolik 3</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {demoReservation.map(row => (
              <TableRow key={row.hour}>
                <TableCell>
                  {row.hour}
                </TableCell>
                <TableCell>
                
                  {renderCheck(row.table1)}
                </TableCell>
                <TableCell>
                  {renderCheck(row.table2)}
                </TableCell>
                <TableCell>
                  {renderCheck(row.table3)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
};


export default TablesReservation;