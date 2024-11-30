import { CssBaseline } from "@mui/material"
import Header from "./app/components/Header"
import { ThemeProvider } from '@mui/material/styles';
import LightTheme from "./themes/LightTheme";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={LightTheme}>
    <CssBaseline />
    <div className="wrapper">
      <Header />      
      <Outlet />
    </div>
    </ThemeProvider>
  )
}

export default App
