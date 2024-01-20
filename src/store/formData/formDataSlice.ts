import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface FormState {
  name?: string;
  age?: number;
  mobile?: string;
  sex?: string;
  govtIdType?: string;
  govtId?: string;
  address?: string;
  state?: string;
  city?: string;
  country?: string;
  pincode?: string;
}

const initialState: FormState = {
  name: "",
  age: 0,
  mobile: "",
  sex: "",
  govtIdType: "",
  govtId: "",
  address: "",
  state: "",
  city: "",
  country: "",
  pincode: "",
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
