import {
  Autocomplete,
  Button,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const sexList = [
  { label: "Female", value: "Female" },
  { label: "Male", value: "Male" },
];

const govtIdTypeList = [
  { label: "Aadhar", value: "Aadhar" },
  { label: "Pan", value: "Pan" },
];

interface FormInput {
  name: string;
  age: number;
  mobile: string;
  sex: NonNullable<"Female" | "Male" | undefined>;
  // govtType: NonNullable<"Aadhar" | "Pan" | undefined>;
  // govtId: string;
}

type Props = {
  onContinue: () => void;
};

// yup schema
const schema = yup.object().shape({
  name: yup
    .string()
    .required("Name required")
    .min(3, "Min 3 character required"),
  age: yup
    .number()
    .typeError("DOB must be a number")
    .required("Age is required")
    .positive("Age must be a positive number")
    .integer("Age must be an integer"),
  mobile: yup
    .string()
    .required("Phone number required")
    .matches(/^[6-9]\d{9}$/, "Please enter valid phone number"),
  sex: yup
    .string()
    .oneOf(["Female", "Male"], "Invalid gender")
    .required("Gender is required"),
  // govtType: yup
  //   .string()
  //   .oneOf(["Aadhar", "Pan"])
  //   .required("ID Type is required"),
  // govtId: yup.string().when("govtType", {
  //   is: 'Aadhar',
  //   then: yupe:
  //       "Aadhar ID must be 12 digits and not start with 0 or 1"
  //     )
  //     .required("Aadhar ID is required"),
  //   otherwise: yup
  //     .string()
  //     .length(10, "PAN ID must be 10 characters")
  //     .required("PAN ID is required"),
  // }),
});
export const Form1 = ({ onContinue }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>({ resolver: yupResolver(schema) });

  const onSubmit = (data: FormInput) => {
    console.log("SUBMIT HIT");
    onContinue();
    console.log(data);
  };

  const firstFormMarkup = (
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
              id="name"
              label="Name"
              placeholder="Enter Name"
              size="medium"
              fullWidth
              {...register("name")}
            />
            <Typography color="red" sx={{ pt: 1 }}>
              {errors.name && errors?.name?.message}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <TextField
              id="outlined-required"
              label="Age"
              placeholder="Age in Years"
              size="medium"
              fullWidth
              type="number"
              {...register("age")}
            />
            <Typography color="red" sx={{ pt: 1 }}>
              {errors.age && errors?.age?.message}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <TextField
              id="outlined-required"
              label="Mobile"
              placeholder="Enter Mobile"
              size="medium"
              fullWidth
              {...register("mobile")}
            />
            <Typography color="red" sx={{ pt: 1 }}>
              {errors.mobile && errors?.mobile?.message}
            </Typography>
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
                  {...register("sex")}
                />
              )}
            />
            <Typography color="red" sx={{ pt: 1 }}>
              {errors.sex && errors?.sex?.message}
            </Typography>
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
                  // {...register("govtType")}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <TextField
              id="outlined-required"
              label="Enter Govt Id"
              placeholder="Enter Govt Id"
              size="medium"
              fullWidth
              // {...register("govtId")}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Button variant="contained" fullWidth size="medium" type="submit">
              Continue
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
  return <>{firstFormMarkup}</>;
};
