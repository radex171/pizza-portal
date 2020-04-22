import React from 'react';
import styles from './Dashboard.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';



const stats = [
  {id: 'cake', valueLocal: '8', valueDelivery: '0', summary: '8'},
  {id: 'breakfast', valueLocal: '8', valueDelivery: '12', summary: '20'},
  {id: 'pizza', valueLocal: '16', valueDelivery: '30', summary: '46'},
  {id: 'salad', valueLocal: '6', valueDelivery: '8', summary: '14'},
  {id: 'TOTAL', valueLocal: '38', valueDelivery: '50', summary: '88'},
];

const reservation = [
  {id: 'table 1', reservation: '3', events: '1', summary: '4'},
  {id: 'table 2', reservation: '4', events: '2', summary: '6'},
  {id: 'table 3', reservation: '8', events: '0', summary: '8'},
  {id: 'TOTAL', reservation: '15', events: '3', summary: '18'},
];
  

const Dashboard = () =>(

  <Paper className={styles.component}>
    <Table>
      <TableHead className={styles.nameTable}><br/><br/>TODAY ORDERS<br/><br/>
        <TableRow>
          <TableCell>Table</TableCell>
          <TableCell>Local</TableCell>
          <TableCell>Delivery</TableCell>
          <TableCell>Summary</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {stats.map(row => (
          <TableRow key={row.id}>
            <TableCell component="th" scope="row">
              {row.id}
            </TableCell>
            <TableCell>
              {row.valueLocal}
            </TableCell>
            <TableCell>
              {row.valueDelivery}
            </TableCell>
            <TableCell className={styles.border}>
              {row.summary}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>

    <br/><br/><br/>

    <Table>
      <TableHead className={styles.nameTable}> RESERVATION<br/><br/>
        <TableRow>
          <TableCell>Table</TableCell>
          <TableCell>Reservation</TableCell>
          <TableCell>Event</TableCell>
          <TableCell>Summary</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {reservation.map(row => (
          <TableRow key={row.id}>
            <TableCell component="th" scope="row">
              {row.id}
            </TableCell>
            <TableCell>
              {row.reservation}
            </TableCell>
            <TableCell>
              {row.events}
            </TableCell>
            <TableCell className={styles.border}>
              {row.summary}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>

  
);
export default Dashboard;