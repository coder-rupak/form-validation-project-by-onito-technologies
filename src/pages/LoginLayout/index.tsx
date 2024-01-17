import React from "react";
import OnitoLogo from "../../assets/onito.png";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  MobileStepper,
  Typography,
} from "@mui/material";
import Form1 from "../Forms/Form1";
import Form2 from "../Forms/Form2";

const steps = [
  {
    header: "Personal Details",
    layout: <Form1 />,
  },
  {
    header: "Address Detailes",
    layout: <Form2 />,
  },
];

export default function Login() {
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const pageMarkup = (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Card sx={{ minWidth: 500 }}>
        <img src={OnitoLogo} alt="Logo" height="80" />
        <CardContent>
          <Box py={1}>
            <Typography fontWeight="bold">
              {steps[activeStep].header}
            </Typography>
          </Box>
          {steps[activeStep].layout}
          <MobileStepper
            variant="text"
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            nextButton={
              <Button
                size="small"
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}
              >
                Next
              </Button>
            }
            backButton={
              <Button
                size="small"
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                Back
              </Button>
            }
          />
        </CardContent>
      </Card>
    </Grid>
  );
  return <>{pageMarkup}</>;
}
