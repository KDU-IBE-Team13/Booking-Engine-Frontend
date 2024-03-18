import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { useEffect, useState } from "react";
import { FAILED_PROPERTIES_FETCH_MESSAGE, PROPERTY_ENDPOINT } from "../../constants/constants";
import { useTranslation } from "react-i18next";

interface Property {
  propertyId: number;
  propertyName: string;
}

export default function PropertyDropDown() {
  const [propertyNames, setPropertyNames] = useState<string[]>([]);

  const { t } = useTranslation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(PROPERTY_ENDPOINT);
        if (!response.ok) {
          throw new Error(FAILED_PROPERTIES_FETCH_MESSAGE);
        }
        const responseData = await response.json();
        const properties: Property[] = responseData.properties;
        const names: string[] = properties.map(
          (property) => property.propertyName
        );
        setPropertyNames(names);
      } catch (error) {
        console.error(FAILED_PROPERTIES_FETCH_MESSAGE, error);
      }
    };

    fetchData();
  }, []);

  const [selectedProperties, setSelectedProperties] = React.useState<string[]>(
    []
  );

  const handleChange = (event: SelectChangeEvent<string[]>) => {
    const value = event.target.value;
    const selectedValues = Array.isArray(value) ? value : [value as string];

    setSelectedProperties(selectedValues);
  };

  const handleMenuItemClick = (value: string) => {
    if (selectedProperties.includes(value)) {
      setSelectedProperties(selectedProperties.filter((val) => val !== value));
    } else {
      setSelectedProperties([...selectedProperties, value]);
    }
  };

  const isOptionSelected = (value: string) =>
    selectedProperties.includes(value);

  return (
    <>
      <label className="property">{t('landingPage.propertyLabel')}*</label>
      <FormControl className="property-select">
        <InputLabel
          shrink={selectedProperties.length > 0}
          className={
            "property-select-label" +
            (selectedProperties.length > 0
              ? " property-select-label-hidden"
              : "")
          }
        >
          {t('landingPage.propertySelectPlaceholder')}
        </InputLabel>
        <Select
          className="property-select"
          labelId="simple-select-label"
          multiple
          value={selectedProperties}
          onChange={handleChange}
          renderValue={(selected) =>
            (selected as string[])
              .map((value) => propertyNames.find((opt) => opt === value))
              .join(", ")
          }
          MenuProps={{
            PaperProps: {
              style: {
                maxHeight: 220,
              },
            },
          }}
        >
          {propertyNames.map((option) => (
            <MenuItem key={option} value={option}>
              <Checkbox
                checked={isOptionSelected(option)}
                onClick={() => handleMenuItemClick(option)}
              />
              <span>{option}</span>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
}
