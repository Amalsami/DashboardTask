import React from 'react'
import BarCharts from '../../Components/Charts/Charts'
import { Grid, Typography } from '@mui/material';
import FilterInput from '../../Components/Filter/FilterInput';
import LineCharts from '../../Components/Charts/LineChart';
import DataTable from '../../Components/Tables/DataTable';
import { useHousingData } from '../../Context/HousingDataContext';

export default function Home() {
  const { fetchedData, selectedLabel, handleLabelChange } = useHousingData();
  const barxAxisData = ['16/17', '17/18', '18/19', '19/20', '20/21', '21/22']
  const linexAxisData = [16, 17, 18, 19, 20, 21]
  const tableHeaders = ['16/17', '17/18', '18/19', '19/20', '20/21', '21/22'];

  return (
    <Grid
      container
      sx={{
        display: "flex",
        justifyContent: "center",
        gap: "10px",
      }}
      spacing={2}
    >
      <Grid item xs={10} md={5} sx={{ textAlign: "center" }}>
        <Typography variant="h5" noWrap component="div">
          Housing Units
        </Typography>
      </Grid>
      <Grid
        item
        xs={10}
        md={10}
        sx={{ display: "flex", justifyContent: "end" }}
      >
        <FilterInput handleLabelChange={handleLabelChange} data={fetchedData} />
      </Grid>
      <Grid item xs={10} md={5}>
        <BarCharts data={fetchedData} selectedLabel={selectedLabel} xAxisData={barxAxisData} />
      </Grid>
      <Grid item xs={10} md={5}>
        <LineCharts data={fetchedData} selectedLabel={selectedLabel} xAxisData={linexAxisData} />
      </Grid>
      <Grid item xs={12} md={12}>
        <DataTable data={fetchedData} selectedLabel={selectedLabel} tableHeaders={tableHeaders} />
      </Grid>
    </Grid>


  )
}
