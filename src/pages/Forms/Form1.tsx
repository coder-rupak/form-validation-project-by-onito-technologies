import { Autocomplete, Button, Grid, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ResponseMessage } from "../../component/ResponseMessage";

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
  govtIdType: NonNullable<"Aadhar" | "Pan" | undefined>;
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
    .typeError("Age must be a number")
    .required("Age is required")
    .positive("Age must be a positive number")
    .integer("Age must be an integer"),
  mobile: yup
    .string()
    .required("Phone number required")
    .matches(/^[6-9]\d{9}$/, "Please enter valid 10 digit phone number"),
  sex: yup
    .string()
    .oneOf(["Female", "Male"], "Please select gender")
    .required("Gender is required"),
  govtIdType: yup
    .string()
    .oneOf(["Aadhar", "Pan"], "Please select Govt Id Type")
    .required("Govt Id Type is required"),
  // govtId: yup.string().when("govtIdType", {
  //   is: "Aadhar",
  //   then: (schema) => schema.required("Needed"),
  //   otherwise: (schema) => schema, // technically this otherwise isnt needed
  // }),
  // govtId: yup.string().when("govtIdType", {
  //   is: "Aadhar", //(govtIdType: string) => govtIdType === 'Aadhar',
  //   then: yup
  //     .string()
  //     .matches(
  //       /^[2-9]\d{11}$/,
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
            <ResponseMessage message={errors.name && errors?.name?.message} />
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
            <ResponseMessage message={errors.age && errors?.age?.message} />
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
            <ResponseMessage
              message={errors.mobile && errors?.mobile?.message}
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
                  {...register("sex")}
                />
              )}
            />
            <ResponseMessage message={errors.sex && errors?.sex?.message} />
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
                  {...register("govtIdType")}
                />
              )}
            />
            <ResponseMessage
              message={errors.govtIdType && errors?.govtIdType?.message}
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
            {/* <ResponseMessage
              message={errors.govtId && errors?.govtId?.message}
            /> */}
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
