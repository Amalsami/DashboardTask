import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function DataTable({ data, selectedLabel, tableHeaders }) {
  if (!data || !Array.isArray(data) || data.length === 0) {
    return <div>No data available</div>;
  }

  const filteredData = selectedLabel
    ? data.filter((row) =>
        row.entitie.toLowerCase().includes(selectedLabel.toLowerCase())
      )
    : data;

  return (
    <TableContainer component={Paper} elevation={2} data-testid="DataTable">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Entities</TableCell>
            {tableHeaders && tableHeaders?.map((header) => (
              <TableCell align="right" key={header}>
                {header}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredData?.map((row) => (
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
