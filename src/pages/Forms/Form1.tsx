import React from "react";
import { Autocomplete, Grid, TextField } from "@mui/material";

const sexList = [
  { label: "Female", value: 1 },
  { label: "Male", value: 2 },
];

const govtIdTypeList = [
  { label: "Aadhar", value: 1 },
  { label: "Pan", value: 2 },
];

export default function Form1() {
  const firstFormMarkup = (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="stretch"
      spacing={2}
    >
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <TextField
          required
          id="outlined-required"
          label="Name"
          placeholder="Enter Name"
          size="medium"
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <TextField
          required
          id="outlined-required"
          label="Date Of Birth Or Age"
          placeholder="DD/MM/YYYY or Age in Years"
          size="medium"
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <TextField
          required
          id="outlined-required"
          label="Mobile"
          placeholder="Enter Mobile"
          size="medium"
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Autocomplete
          id="combo-box-demo"
          options={sexList}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Sex"
              size="medium"
              fullWidth
              required
            />
          )}
        />
      </Grid>
      <Grid item>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Autocomplete
              id="combo-box-demo"
              options={govtIdTypeList}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Govt Id Type"
                  size="medium"
                  fullWidth
                  required
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <TextField
              required
              id="outlined-required"
              label="Enter Govt Id"
              placeholder="Enter Govt Id"
              size="medium"
              fullWidth
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
  return <>{firstFormMarkup}</>;
}
