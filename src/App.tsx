import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Login } from "./pages/LoginLayout";
// import Router from "./Routes";

const defaultTheme = createTheme();

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container sx={{ height: "100vh" }}>
        <Login />
        {/* <Router /> */}
      </Grid>
    </ThemeProvider>
  );
}
