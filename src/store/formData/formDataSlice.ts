import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface FormState {
  name: string;
  age: number;
  mobile: string;
  sex: string;
  govtIdType: string;
  govtId: string;
  // Add more form fields as needed
}

const initialState: FormState = {
  name: "",
  age: 0,
  mobile: "",
  sex: "",
  govtIdType: "",
  govtId: "",
};

const formDataSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setValue: (state, action: PayloadAction<FormState>) => {
      state = action.payload;
      console.log("SLICESTATE", state)
    },
  },
});

export const { setValue } = formDataSlice.actions;
export default formDataSlice.reducer;
