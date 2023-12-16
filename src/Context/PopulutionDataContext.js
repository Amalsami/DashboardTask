import React, { createContext, useContext, useState, useEffect } from 'react';
import {fetchData } from '../Services/Services';

const PopulationDataContext = createContext();

export const usePopulutionData = () => {
  return useContext(PopulationDataContext);
};

export const PopulutionDataProvider = ({ children }) => {
  const [fetchedData, setFetchedData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedLabel, setSelectedLabel] = useState(null);

  useEffect(() => {
    fetchData()
      .then((fetchedData) => {
        console.log(fetchedData);
        setFetchedData(fetchedData.populution);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error:', error);
        setLoading(false);
      });
  }, []);

  const handleLabelChange = (label) => {
    setSelectedLabel(label);
  };

  const data = {
    fetchedData,
    loading,
    selectedLabel,
    handleLabelChange,
  };

  return <PopulationDataContext.Provider value={data}>{children}</PopulationDataContext.Provider>;
};
