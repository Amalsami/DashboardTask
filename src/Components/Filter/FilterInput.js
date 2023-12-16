import React, { useState } from 'react';
import { MenuItem, Select, FormControl, InputLabel, Paper } from '@mui/material';

export default function FilterInput({ handleLabelChange, data }) {
  const [selectedTag, setSelectedTag] = useState('');

  const handleChange = (event) => {
    setSelectedTag(event.target.value);
    handleLabelChange(event.target.value === 'All' ? null : event.target.value);
  };

  const allOption = { entitie: 'All' };

  return (
    <Paper sx={{ background: 'inherit', boxShadow: 'none'  }}>
      <FormControl variant="standard" size='small' sx={{ m: 1, minWidth: 120}} >
        <InputLabel id="demo-simple-select-standard-label">Tag Filter</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={selectedTag}
          onChange={handleChange}
          label="Filter"
        >
          <MenuItem value={allOption.entitie}>{allOption.entitie}</MenuItem>
          {data &&
            data?.map((item, index) => (
              <MenuItem key={index} value={item.entitie}>
                {item.entitie}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </Paper>
  );
}
