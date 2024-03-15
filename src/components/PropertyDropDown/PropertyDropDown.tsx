import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";

const options = [
  { value: 10, label: "Property 1" },
  { value: 20, label: "Property 2" },
  { value: 30, label: "Property 3" },
];

export default function PropertyDropDown() {
  const [age, setAge] = React.useState<number[]>([]);
  const [inputLabel, setInputLabel] = React.useState("Search all properties");

  const handleChange = (event: SelectChangeEvent<number[]>) => {
    setAge(event.target.value);
    if (event.target.value.length === 0) {
      setInputLabel("Placeholder");
    } else {
      setInputLabel("");
    }
  };

  const handleMenuItemClick = (value: number) => {
    if (age.includes(value)) {
      setAge(age.filter((val) => val !== value));
    } else {
      setAge([...age, value]);
      setInputLabel("");
    }
  };

  const isOptionSelected = (value: number) => age.includes(value);

  return (
    <>
      <label htmlFor="properties" className="property">
        Property name*
      </label>
      <FormControl sx={{ minWidth: 220 }} className="property-select">
        <InputLabel id="demo-simple-select-label" className="property-select">
          {inputLabel}
        </InputLabel>
        <Select
          className="property-select"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          multiple
          value={age}
          onChange={handleChange}
          renderValue={(selected) =>
            (selected as number[])
              .map((value) => options.find((opt) => opt.value === value)?.label)
              .join(", ")
          }
        >
          <MenuItem disabled value=""></MenuItem>
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              <Checkbox
                checked={isOptionSelected(option.value)}
                onClick={() => handleMenuItemClick(option.value)}
              />
              <span>{option.label}</span>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
}
