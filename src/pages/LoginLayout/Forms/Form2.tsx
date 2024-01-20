import React from "react";
import { Button, Grid, TextField } from "@mui/material";

export const Form2: React.FC = () => {
  const secondFormMarkup = (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="stretch"
      spacing={2}
    >
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <TextField
          id="outlined-required"
          label="Address"
          placeholder="Enter Address"
          size="medium"
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <TextField
          id="outlined-required"
          label="State"
          placeholder="Enter State"
          size="medium"
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <TextField
          id="outlined-required"
          label="City"
          placeholder="Enter City"
          size="medium"
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <TextField
          id="outlined-required"
          label="Country"
          placeholder="Enter Country"
          size="medium"
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <TextField
          id="outlined-required"
          label="Pincode"
          placeholder="Enter Pincode"
          size="medium"
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Button variant="contained" fullWidth size="medium">Submit</Button>
      </Grid>
    </Grid>
  );
  return <>{secondFormMarkup}</>;
}
