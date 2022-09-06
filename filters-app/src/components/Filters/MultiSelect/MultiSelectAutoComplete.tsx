import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Checkbox } from "@material-ui/core";
import { Autocomplete, TextField } from "@mui/material";
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { MultiSelectProps } from "../Shared/Interfaces";

const useStyles = makeStyles((theme) => ({
  SelectionBox: {
    display: "flex",
    flexWrap: "wrap",
    padding: theme.spacing(1),
    overflowY: "auto",
    marginTop: "10px",
    marginBottom: "5px",
  },
}));

const MultiSelectAutoComplete = (props: MultiSelectProps) => {
  const classes = useStyles();
  const { options, label } = props;
  const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
  const checkedIcon = <CheckBoxIcon fontSize="small" />;

  return (
    <div className={classes.SelectionBox}>
      <Autocomplete
        multiple
        color="red"
        options={options}
        disableCloseOnSelect
        getOptionLabel={(option) => option}
        renderOption={(props, option, { selected }) => (
          <li {...props}>
            <Checkbox
              icon={icon}
              checkedIcon={checkedIcon}
              style={{ marginRight: 8 }}
              checked={selected}
            />
            {option}
          </li>
        )}
        style={{ width: "100%" }}
        renderInput={(params) => (
          <TextField {...params} label={label} />
        )}
      />
    </div>
  );
}

export default MultiSelectAutoComplete