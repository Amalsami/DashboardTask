import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { fetchData } from '../Services/Services';

export default function DataTable() {
  const [tableData, setTableData] = useState(null);

  const tableHeaders = ['16/17', '17/18', '18/19', '19/20', '20/21', '21/22'];
  
  useEffect(() => {
    fetchData()
      .then((fetchedData) => {
        setTableData(fetchedData);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);


  return (
    <TableContainer component={Paper} elevation={2}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow >
            <TableCell>Entities</TableCell>
            {tableHeaders.map((header) => (
              <TableCell align="right" key={header}>
                {header}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData &&
            tableData.map((row) => (
              <TableRow key={row.entitie}>
                <TableCell component="th" scope="row">
                  {row.entitie}
                </TableCell>
                {tableHeaders.map((header) => (
                  <TableCell align="right" key={`${row.entitie}-${header}`}>
                    {row.data.find((data) => Object.keys(data)[0] === header)?.[header]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}