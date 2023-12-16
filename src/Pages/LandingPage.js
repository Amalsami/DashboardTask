import React from "react";
import Box from "@mui/material/Box";
import { Outlet } from "react-router-dom";
import HousingDashboard from "../Components/MainLayout/HousingDashboard";

const drawerWidth = 240;
export default function MainLayout() {

  return (
    <Box sx={{ display: "flex" }}>
      <HousingDashboard/>
      <Box
        component="main"
        sx={{ p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` }, marginTop:'50px' }}
      >
      <Outlet/>
      </Box>
    </Box>
  );
}
