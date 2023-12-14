import React, { useEffect, useState } from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

const keyToLabel = {
  coal: 'Electricity from coal (TWh)',
  gas: 'Electricity from gas (TWh)',
  oil: 'Electricity from oil (TWh)',
  nuclear: 'Electricity from nuclear (TWh)',
  hydro: 'Electricity from hydro (TWh)',
  wind: 'Electricity from wind (TWh)',
  solar: 'Electricity from solar (TWh)',
  bio: 'Electricity from bioenergy (TWh)',
  other: 'Other renewables excluding bioenergy (TWh)',
};

const colors = {
  coal: '#000000',
  gas: '#888888',
  oil: '#C0C0C0',
  nuclear: '#FFA500',
  hydro: '#0000FF',
  wind: '#ADD8E6',
  solar: '#FFFF00',
  bio: '#00FF00',
  other: '#D3D3D3',
};

const stackStrategy = {
  stack: 'total',
  area: true,
  stackOffset: 'none', // To stack 0 on top of others
};

const customize = {
  height: 300,
  legend: { hidden: true },
  margin: { top: 5 },
  stackingOrder: 'descending',
};

export default function AnotherLineChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch your data from the API
    fetch('https://your-api-url')
      .then((response) => response.json())
      .then((result) => {
        // Assuming the fetched data is in the correct format
        setData(result);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []); // Run once on mount

  return (
    <LineChart
      xAxis={[
        {
          dataKey: 'year',
          valueFormatter: (v) => v.toString(),
          min: 1985,
          max: 2022,
        },
      ]}
      series={Object.keys(keyToLabel).map((key) => ({
        dataKey: key,
        label: keyToLabel[key],
        color: colors[key],
        showMark: false,
        ...stackStrategy,
      }))}
      dataset={data} // Use the fetched data as the dataset
      {...customize}
    />
  );
}
