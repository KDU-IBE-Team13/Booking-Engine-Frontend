import { Box, Checkbox, ListItemIcon, ListItemText, MenuItem, Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";
// import { useAppDispatch, useAppSelector } from "../../../../../redux/store";
// import { setFilter } from "../../../../../redux/reducers/roomResultConfigDataSlice";
// import { useTranslation } from "react-i18next";

const Filter = () => {
  // const filters = useAppSelector((state) => state.resultsConfiguration.filters);
  // const reduxDispatch = useAppDispatch();
  // const { t } = useTranslation();
  // const handleClick = (filterData: any) => {
  //   reduxDispatch(setFilter(filterData));
  // };

  const filters = [
    {
      filterName: 'Bed Type',
      show: true,
      options: ['Option 1', 'Option 2', 'Option 3'],
      selectedOptions: ['Option 1'], // Optional: You can initialize selectedOptions if needed
    },
    {
      filterName: 'Room Type',
      show: true,
      options: ['Option A', 'Option B', 'Option C'],
      selectedOptions: [], // Optional: You can initialize selectedOptions if needed
    },
    {
      filterName: 'Price',
      show: true,
      options: ['Option X', 'Option Y', 'Option Z'],
      selectedOptions: [], // Optional: You can initialize selectedOptions if needed
    },
  ];
  

  return (
    <Box
      sx={{
        backgroundColor: "#EFF0F1",
        padding: "1rem 1.2rem",
        width: "293px",
        flexGrow: 1,
        height: "fit-content"
      }}
    >
      <Typography fontWeight={700} fontSize="1.25rem">
        {"Narrow Your Results"}
      </Typography>
      <div>
        {filters.map((filter) => {
          return (
            filter.show && (
              <Accordion
                key={filter.filterName}
                sx={{ boxShadow: "none", backgroundColor: "transparent" }}
              >
                <AccordionSummary
                  sx={{ padding: 0 }}
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>{filter.filterName}</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ padding: "0" }}>
                  {filter.options.map((option) => {
                    return (
                      <MenuItem key={option}>
                        <ListItemIcon>
                          <Checkbox
                            // onClick={() =>
                            //   handleClick({
                            //     filterName: filter.filterName,
                            //     option: option,
                            //   })
                            // }
                            disabled={false}
                            checked={filter.selectedOptions?.includes(option)}
                          />
                        </ListItemIcon>
                        {/* <ListItemText primary={t(`${option.replaceAll("_", " ")}`)} /> */}
                      </MenuItem>
                    );
                  })}
                </AccordionDetails>
              </Accordion>
            )
          );
        })}
      </div>
    </Box>
  );
};

export default Filter;