import { Box, Typography, useTheme } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { mockDataInvoices } from '../../data/mockData';
import Header from '../../components/Header';
import { tokens } from '../../theme';

const Invoice = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    {
      field: 'id',
      headerName: 'ID',
    },
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
      cellClassName: 'name-column--cell',
    },
    {
      field: 'phone',
      headerName: 'Phone',
      flex: 1,
    },
    {
      field: 'email',
      headerName: 'email',
      flex: 1,
    },
    {
      field: 'cost',
      headerName: 'Cost',
      flex: 1,
      renderCell: (params) => (
        <Typography color={colors.greenAccent[500]}>
          {params.row.cost}
        </Typography>
      ),
    },
    {
      field: 'date',
      headerName: 'Date',
      flex: 1,
    },
  ];
  return (
    <Box m="20px">
      <Header title="Invoice" subTitle="Managing the Team Members" />
      <Box
        height="75vh"
        mt="40px"
        sx={{
          '& .MuiDataGrid-root': {
            border: 'none',
          },
          '& .MuiDataGrid-cell': {
            borderBottom: 'none',
          },
          '& .MuiDataGrid-columnHeaders': {
            borderBottom: 'none',
            backgroundColor: colors.blueAccent[700],
            fontSize: '14px',
          },
          '& .name-column--cell': {
            color: colors.greenAccent[300],
          },
          '& .MuiDataGrid-virtualScroller': {
            background: colors.primary[400],
          },
          '& .MuiDataGrid-footerContainer': {
            backgroundColor: colors.blueAccent[700],
            borderTop: 'none',
          },
          '& .MuiDataGrid-toolbarContainer .MuiButton-text': {
            color: colors.gray[100],
          },
        }}
      >
        <DataGrid rows={mockDataInvoices} columns={columns} />
      </Box>
    </Box>
  );
};

export default Invoice;
