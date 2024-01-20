import React from "react";
import { Button, Grid, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { setValue } from "../../../store/formData/formDataSlice";
import { ResponseMessage } from "../../../component/ResponseMessage";
import { useAppSelector } from "../../../store/hooks";

interface Form2Input {
  address?: string;
  state?: string;
  city?: string;
  country?: string;
  pincode?: string;
}

const schema = yup.object().shape({
  address: yup.string().optional(),
  state: yup.string().optional(),
  city: yup.string().optional(),
  country: yup.string().optional(),
  pincode: yup
    .string()
    .optional()
    .matches(/^[1-9][0-9]{5}$/, "Please enter valid 7 digit pincode"),
});

export const Form2 = () => {
  const users = useAppSelector((state) => state.user);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Form2Input>({ resolver: yupResolver(schema) });

  const onSubmit = (data: Form2Input) => {
    console.log(data);
    dispatch(setValue(data));
  };

  React.useEffect(() => {
    console.log("users", users);
  }, [users]);

  const secondFormMarkup = (
    <>
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
              id="outlined-required"
              label="Address"
              placeholder="Enter Address"
              size="medium"
              fullWidth
              {...register("address")}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <TextField
              id="outlined-required"
              label="State"
              placeholder="Enter State"
              size="medium"
              fullWidth
              {...register("state")}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <TextField
              id="outlined-required"
              label="City"
              placeholder="Enter City"
              size="medium"
              fullWidth
              {...register("city")}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <TextField
              id="outlined-required"
              label="Country"
              placeholder="Enter Country"
              size="medium"
              fullWidth
              {...register("country")}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <TextField
              id="outlined-required"
              label="Pincode"
              placeholder="Enter Pincode"
              size="medium"
              fullWidth
              {...register("pincode")}
            />
            <ResponseMessage
              message={errors.pincode && errors?.pincode?.message}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Button variant="contained" fullWidth size="medium" type="submit">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
  return <>{secondFormMarkup}</>;
};
