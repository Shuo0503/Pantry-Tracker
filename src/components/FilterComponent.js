import React, { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';

export default function FilterComponent({ onFilter }) {
  const [filters, setFilters] = useState({ name: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  const handleFilter = () => {
    onFilter(filters);
  };

  return (
    <Box display={'flex'} gap={2} padding={2}>
      <TextField
        name="name"
        label="Name"
        variant="outlined"
        value={filters.name}
        onChange={handleChange}
      />
      <Button variant="contained" onClick={handleFilter}>
        Search
      </Button>
    </Box>
  );
}
