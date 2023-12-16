import React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { Paper } from '@mui/material';

export default function LineCharts({ data, selectedLabel,xAxisData }) {
  const xAxisLabels = data ? data?.map((item) => item?.entitie) : [];
  const seriesData = data
    ? data?.map((item) => ({
      data: item.data.map((yearData) => Object.values(yearData)[0]),
    }))
    : [];

  const filteredSeriesData = selectedLabel
    ? seriesData.filter((data, index) => xAxisLabels[index] === selectedLabel)
    : seriesData;

  return (
    <Paper sx={{ display: "flex", justifyContent: "center" ,p:1 }}>
      <LineChart
        xAxis={[{ data: xAxisData }]}
        series={filteredSeriesData.map((data, index) => ({
          data: data.data,
          // label: xAxisLabels[index],
        }))}
        width={500}
        height={300}
      />
    </Paper>
  );
}
