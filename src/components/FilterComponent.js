import React, { useState } from 'react';
import { Box, TextField, Button, MenuItem } from '@mui/material';

const categories = ['Category 1', 'Category 2', 'Category 3'];

export default function FilterComponent({ onFilter }) {
  const [filters, setFilters] = useState({ name: '', category: '' });

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
      <TextField
        name="category"
        label="Category"
        variant="outlined"
        select
        value={filters.category}
        onChange={handleChange}
      >
        {categories.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>
      <Button variant="contained" onClick={handleFilter}>
        Filter
      </Button>
    </Box>
  );
}
