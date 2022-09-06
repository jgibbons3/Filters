import { DialogActions, DialogContent, DialogTitle, IconButton } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import React, { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import { makeStyles } from "@material-ui/core/styles";
import {  Grid } from "@material-ui/core";
import MultiSelect from "../Filters/MultiSelect/MultiSelect.tsx"
import MultiSelectAutoComplete from "../Filters/MultiSelect/MultiSelectAutoComplete.tsx";
import { Button } from "@material-ui/core";
import InstitutionNameRules from "./InstitutionNameRules/InstitutionNameRules.tsx";

const useStyles = makeStyles((theme) => ({
  dialogTitle: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid",
    borderBottomColor: theme.palette.divider,
    height: "20px",
    color: theme.palette.secondary.main,
  },
  dialogFooter: {
    display: "flex",
    borderTop: "1px solid",
    borderTopColor: theme.palette.divider,
    height: "25px",
  },
  bottomColor: {
    color: theme.palette.secondary.main,
    borderColor: theme.palette.secondary.main,
    padding: "14px 5px",
    marginTop: "5px",
    textTransform: "none",
  },
}));
interface FiltersProps {
  onCloseModal: void;
}

const Filters = (props: FiltersProps) => {
  const {onCloseModal} = props;
  const classes = useStyles();
  const [instRulesOpen, setInstRulesOpen] = useState(false);
  const initialFilters ={
      operators: ["Anna", "Alex", "Manuela", "Unknown operator"],
      institutions: ["AFR Mammo2 - Aleris Frogner", "InspirationPrime - USZ", "MD-IDRMANOV - USZ"],
      density: ["ACR A", "ACR B", "ACR C", "ACR D"],
      quality: ["Perfect", "Good", "Moderate", "Inadequate"],
      biRads: ["No cancer", "Cancer possible", "Cancer confirmed"],
      modality: ["Mammography", "Tomosynthesis"],
      purpose: ["Screening", "Diagnostic"],
      postoperative: ["Operated", "Not-Operated"],
      diagnosis: ["Microcalc Benign", "Microcalc Suspicious", "Lesions Suspicious", "No Lesions"],
      miscellaneous: ["Multiple examinations", "Multiple captures", "Re-annotated data", "Confirmed results"]
  };

  const handleInstRules = () => {
    setInstRulesOpen(!instRulesOpen)
    //open InstitutesRules dialog
  }

  return (
    
    <div>
      <Dialog
        open={true}
        maxWidth="xl"
        fullWidth={true}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        
        <DialogTitle className={classes.dialogTitle}>
          <span>FILTERS</span>
          <IconButton onClick={onCloseModal}>
              <CloseIcon />
          </IconButton>
        </DialogTitle>
          
        <DialogContent>
          <Grid spacing={1} container direction="row" justifyContent="space-between">

            {/* Tom Grid */}
            <Grid container justifyContent="space-between" direction="row">
              {/* Left Top Grid */}
              <Grid xs={12} sm={12} md={6} spacing={0} container direction="row" alignItems="center">
                <Grid item  xs={9} sm={10} md={10} >
                  <MultiSelectAutoComplete
                    label={"Institutions"}
                    options={initialFilters.institutions}
                  /> 
                </Grid>
                <Grid item  xs={3} sm={2} md={2}>
                  <Button onClick={handleInstRules} className={classes.bottomColor} variant="outlined">Add rule</Button>
                </Grid>
              </Grid>

              {/* Right Top Grid */}
              <Grid xs={12} sm={12} md={6} item >
                <Grid item>
                  <MultiSelectAutoComplete
                    label={"Operators"}
                    options={initialFilters.operators}
                  /> 
                </Grid>
              </Grid>
            </Grid>
            
            {/* Bottom Grid */}
            <Grid container justifyContent="space-between">

              {/* First Bottom Row */}
              <Grid xs={12} sm={6} md={4} item >
                <Grid item>
                  <MultiSelect
                    label={"Density"}
                    options={initialFilters.density}
                  />
                </Grid>
                <Grid item>
                  <MultiSelect
                    label={"Postoperative"}
                    options={initialFilters.postoperative}
                  />
                </Grid>
                <Grid item>
                  <MultiSelect
                    label={"Purpose"}
                    options={initialFilters.purpose}
                  />
                </Grid>
              </Grid>

              {/* Second Bottom Row */}
              <Grid xs={12} sm={6} md={4} item >
                <Grid item>
                  <MultiSelect
                    label={"Bi-rads"}
                    options={initialFilters.biRads}
                  />
                </Grid>
                <Grid item>
                  <MultiSelect
                    label={"Modality"}
                    options={initialFilters.modality}
                  />
                </Grid>
                <Grid item>
                  <MultiSelect
                    label={"Diagnosis"}
                    options={initialFilters.diagnosis}
                  />
                </Grid>
              </Grid>

              {/* Third Bottom Row */}
              <Grid xs={12} sm={6} md={4} item >
                <Grid item>
                  <MultiSelect
                   label={"Quality"}
                   options={initialFilters.quality}
                  />
                </Grid>
                <Grid item>
                  <MultiSelect
                    label={"Miscellaneous"}
                    options={initialFilters.miscellaneous}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>         
        </DialogContent>

        <DialogActions className={classes.dialogFooter}>
          <Button>RESET</Button>
          <Button>APPLY</Button>
        </DialogActions>
      </Dialog>

      {instRulesOpen && 
        <InstitutionNameRules 
          open={true}
          onClose={handleInstRules} 
          // insstitutions={Object.keys(devices.device_list)}
        />
      }
    </div>
  );
}

export default Filters