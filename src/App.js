import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ChartsPage from './Pages/populutionPage/populutionPage';
// import Tables from './Pages/Tables/Tables';
import Home from './Pages/HousingPage/HousingPage';
import MainLayout from './Pages/LandingPage';
import { HousingDataProvider } from './Context/HousingDataContext';
import { PopulutionDataProvider } from './Context/PopulutionDataContext';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainLayout />} >
          <Route index element={<HousingDataProvider>
            <Home />
          </HousingDataProvider>} />
          <Route path="charts" element={ <PopulutionDataProvider><ChartsPage /></PopulutionDataProvider>} />
          {/* <Route path="tables" element={<Tables />} /> */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
