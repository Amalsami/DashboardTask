import React from 'react';
import { BarChart } from '@mui/x-charts';
import { Paper } from '@mui/material';

export default function BarCharts({ data, selectedLabel, xAxisData }) {

  const xAxisLabels = data ? data.map((item) => item.entitie) : [];
  const seriesData = data ? data.map((item) => ({
    data: item.data.map((yearData) => Object.values(yearData)[0]),
  })) : [];

  const filteredSeriesData = selectedLabel
    ? seriesData.filter((data, index) => xAxisLabels[index] === selectedLabel)
    : seriesData;

  return (
    <Paper sx={{ display: "flex", justifyContent: "center", p: 1 }}>
      <BarChart
        xAxis={[{ scaleType: 'band', data: xAxisData }]}
        series={filteredSeriesData}
        width={500}
        height={300}
        data-testid="bar-chart"
      />
    </Paper>
  );
}
