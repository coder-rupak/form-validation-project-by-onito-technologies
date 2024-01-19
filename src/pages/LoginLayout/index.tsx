import React from "react";
import OnitoLogo from "../../assets/onito.png";
import {
  Box,
  Card,
  CardContent,
  Grid,
  MobileStepper,
  Typography,
} from "@mui/material";
import { Form1 } from "../Forms/Form1";
import { Form2 } from "../Forms/Form2";
import "./stepper.css";

export default function Login() {
  const [activeStep, setActiveStep] = React.useState(0);
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const steps = [
    {
      header: "Personal Details",
      layout: <Form1 onContinue={handleNext} />,
    },
    {
      header: "Address Details",
      layout: <Form2 />,
    },
  ];

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
            variant="dots"
            steps={steps.length}
            position="static"
            activeStep={activeStep}
            nextButton={null}
            backButton={null}
          />
        </CardContent>
      </Card>
    </Grid>
  );
  return <>{pageMarkup}</>;
}
