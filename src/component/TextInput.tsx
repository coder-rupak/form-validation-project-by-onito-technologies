import { TextField, TextFieldProps } from "@mui/material";

export const TextInput = (props: TextFieldProps) => {
  return (
    <>
      <TextField {...props} size="medium" fullWidth />
    </>
  );
};
