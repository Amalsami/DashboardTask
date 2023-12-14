import React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { Paper } from '@mui/material';

export default function LineCharts({ units, selectedLabel }) {
  const xAxisLabels = units ? units.map((item) => item?.entitie) : [];
  const seriesData = units
    ? units.map((item) => ({
      data: item.data.map((yearData) => Object.values(yearData)[0]),
    }))
    : [];

  const filteredSeriesData = selectedLabel
    ? seriesData.filter((data, index) => xAxisLabels[index] === selectedLabel)
    : seriesData;

  return (
    <Paper sx={{ display: "flex", justifyContent: "center" }}>
      <LineChart
        xAxis={[{ data: [17, 18, 19, 20, 21, 22] }]}
        series={filteredSeriesData.map((data, index) => ({
          data: data.data,
          label: xAxisLabels[index],
        }))}
        width={500}
        height={300}
      />
    </Paper>
  );
}
