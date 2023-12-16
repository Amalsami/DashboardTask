import React from 'react'
import BarCharts from '../../Components/Charts/Charts'
import LineCharts from '../../Components/Charts/LineChart'
import { usePopulutionData } from '../../Context/PopulutionDataContext';
import FilterInput from '../../Components/Filter/FilterInput';
import { Grid, Typography } from '@mui/material';
import DataTable from '../../Components/Tables/DataTable';

export default function ChartsPage() {
  const { fetchedData, selectedLabel, handleLabelChange } = usePopulutionData();
  const barxAxisData = ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020']
  const linexAxisData = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
  const tableHeaders = ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'];


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
      <Grid item xs={10} md={5} sx={{textAlign:"center"}}>
      <Typography variant="h5" noWrap component="div">
        Population Density
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

