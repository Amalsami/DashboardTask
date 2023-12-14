import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { Paper } from '@mui/material';

export default function BarCharts({ units, selectedLabel }) {
  const xAxisLabels = units ? units.map((item) => item?.entitie) : [];
  const seriesData = units ? units.map((item) => ({
    data: item.data.map((yearData) => Object.values(yearData)[0]),
  })) : [];

  const filteredSeriesData = selectedLabel
    ? seriesData.filter((data, index) => xAxisLabels[index] === selectedLabel)
    : seriesData;

  return (
    <Paper sx={{display:"flex", justifyContent:"center"}}>
    <BarChart
      xAxis={[{ scaleType: 'band', data: ['16/17', '17/18', '18/19', '19/20', '20/21', '21/22'] }]}
      series={filteredSeriesData}
      width={500}
      height={300}
    />
    </Paper>
  );
}
