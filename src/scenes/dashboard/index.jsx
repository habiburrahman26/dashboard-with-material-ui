import { Box } from '@mui/system';
import React from 'react';
import Header from '../../components/Header';
import TopBar from '../global/TopBar';

const Dashboard = () => {
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Dashboard" subTitle="Welcome to your dashboard" />
      </Box>
    </Box>
  );
};

export default Dashboard;
