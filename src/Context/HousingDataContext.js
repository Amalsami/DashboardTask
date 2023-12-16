import React, { createContext, useContext, useState, useEffect } from 'react';
import {fetchData} from '../Services/Services';

const HousingDataContext = createContext();

export const useHousingData = () => {
  return useContext(HousingDataContext);
};

export const HousingDataProvider = ({ children }) => {
  const [fetchedData, setFetchedData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedLabel, setSelectedLabel] = useState(null);

  useEffect(() => {
    fetchData()
      .then((fetchedData) => {
        setFetchedData(fetchedData.housing);
        console.log(fetchedData.housing);
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

  return <HousingDataContext.Provider value={data}>{children}</HousingDataContext.Provider>;
};
