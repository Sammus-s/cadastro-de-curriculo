import { CssBaseline } from "@mui/material"
import Header from "./app/components/Header"
import { ThemeProvider } from '@mui/material/styles';
import sagLightTheme from "./themes/sagLightTheme";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={sagLightTheme}>
    <CssBaseline />
    <div className="wrapper">
      <Header />      
      <Outlet />
    </div>
    </ThemeProvider>
  )
}

export default App
