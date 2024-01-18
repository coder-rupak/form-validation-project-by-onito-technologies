import React from "react";
import { Autocomplete, Grid, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const sexList = [
  { label: "Female", value: 1 },
  { label: "Male", value: 2 },
];

const govtIdTypeList = [
  { label: "Aadhar", value: 1 },
  { label: "Pan", value: 2 },
];

interface FormInput {
  name: string;
  dob: string;
  mobile: string;
  sex: string;
  govtType: string;
  govtId: string;
}

// yup schema
const schema = yup.object().shape({
  name: yup.string().required("Name required").min(3, "Min 3 characters"),
  dob: yup.string().required("DOB required"),
  mobile: yup
    .string()
    .required("Phone number required")
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      "Please enter valid phone number"
    ),
  sex: yup.string().required("State is a required field"),
  govtType: yup.string().required("Phone is a required field"),
  govtId: yup.string().required("Zipcode is a required field"),
});

export const Form1: React.FC = () => {
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm<FormInput>({ resolver: yupResolver(schema) });

  const onSubmit = (data: FormInput) => {
    console.log(data);
  };

  const firstFormMarkup = (
    <form onSubmit={handleSubmit(onSubmit)}>
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
            {...register("name")}
            // error={errors?.name?.type === "required" ? true : false}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <TextField
            required
            id="outlined-required"
            label="Age"
            placeholder="Age in Years"
            size="medium"
            fullWidth
            {...register("dob")}
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
            {...register("mobile")}
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
                {...register("sex")}
              />
            )}
          />
        </Grid>
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
                {...register("govtType")}
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
            {...register("govtId")}
          />
        </Grid>
      </Grid>
    </form>
  );
  return <>{firstFormMarkup}</>;
};
