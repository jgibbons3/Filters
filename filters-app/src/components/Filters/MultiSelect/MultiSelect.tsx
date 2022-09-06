import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Checkbox, Typography, Grid } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { MultiSelectProps } from "../Shared/Interfaces";

const useStyles = makeStyles((theme) => ({
  SelectionBox: {
    display: "flex",
    margin: "5px",
    padding: theme.spacing(1),
  },
  titleFilterCard: {
    margin: 0,
  },
  checkbox: {
    padding: "3px",
  },
  controlLabel: {
    marginLeft: "-4px",
    marginBottom: "2px"
  }
}));

const MultiSelect = (props: MultiSelectProps) => {
  const classes = useStyles();
  const { options, label } = props;

  return (
    
    <Grid container direction="column" spacing={1} className={classes.SelectionBox}>
      <Grid
        item
        container
        justifyContent="space-between"
        alignItems="center"
        wrap="nowrap"
        direction="row"
      >
        <Grid item>
          <Typography variant="h6" className={classes.titleFilterCard}>
            {label}
          </Typography>
        </Grid>
      </Grid>
      <Grid item container direction="column">
          {options.map((item, i) => (
            <FormControlLabel
              key={item+i}
              label={
                <Typography>
                  {item}
                </Typography>
              }
              className={classes.controlLabel}
              control={
                <Checkbox
                  className={classes.checkbox}
                  name={item.toString()}
                />
              }
            />
          ))}
      </Grid>
    </Grid>
    
  );
}

export default MultiSelect