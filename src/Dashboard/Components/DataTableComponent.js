import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box,TextField } from '@mui/material';

export default function TableComponent({ tableData, visibleFields }) {
  const [searchQuery, setSearchQuery] = useState('');
  const colorFields = [
    'Price Change',
    'Price Change Percentage',
    'Ath Change Percentage',
    'Ath',
    'Atl',
    'Atl Change Percentage',
  ];

  const columns = visibleFields.map((field) => ({
    field,
    headerName: field,
    width: 150,
    renderCell: (params) => {
      const value = params.value;

      if (typeof value === 'string' && (value.startsWith('http'))) {
        return (
          <Box
            component="img"
            src={value}
            alt={field}
            sx={{
              maxWidth: 50,
              maxHeight: 50,
            }}
          />
        );
      }

      if (typeof value === 'number' && colorFields.includes(field)) {
        return (
          <Box
            sx={{
              color: value > 0 ? 'green' : 'red',
              fontWeight: 'bold',
            }}
          >
            {value}
          </Box>
        );
      }

      return <span>{value}</span>;
    },
  }));

  const rows = tableData
    .filter((row) => {
      return row.Name?.toLowerCase().includes(searchQuery.toLowerCase());
    })
    .map((row, index) => ({
      id: index + 1,
      ...row,
    }));

  const paginationModel = { page: 0, pageSize: 10};

  return (
    <Box>
      <Box 
      sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
      <TextField
        label="Search"
        variant="outlined"
        sx={{ width:"70%" }}
        margin="normal"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search Crypto..."
      />
      </Box>
      <DataGrid
      rows={rows}
      columns={columns}
      initialState={{ pagination: { paginationModel } }}
      pageSizeOptions={[10, 20]}
      hideFooterSelectedRowCount
    />
    </Box>
    
  );
}
