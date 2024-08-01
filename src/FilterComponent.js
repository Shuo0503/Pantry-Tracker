// src/components/FilterComponent.js

import React, { useState } from 'react';
import { Box, TextField, FormControl, InputLabel, Select, MenuItem, Button } from '@mui/material';

const FilterComponent = ({ onFilter }) => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');

  const handleFilter = () => {
    onFilter({ name, category });
  };

  return (
    <Box display="flex" gap="1rem" alignItems="center" mb={2}>
      <TextField
        label="Name"
        variant="outlined"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <FormControl variant="outlined">
        <InputLabel id="category-label">Category</InputLabel>
        <Select
          labelId="category-label"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          label="Category"
        >
          <MenuItem value=""><em>None</em></MenuItem>
          <MenuItem value="category1">Category 1</MenuItem>
          <MenuItem value="category2">Category 2</MenuItem>
          <MenuItem value="category3">Category 3</MenuItem>
        </Select>
      </FormControl>
      <Button variant="contained" color="primary" onClick={handleFilter}>
        Filter
      </Button>
    </Box>
  );
};

export default FilterComponent;
