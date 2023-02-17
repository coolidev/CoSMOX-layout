import { useContext } from "react";
import { createTheme, ThemeProvider } from '@material-ui/core';
import Home from './pages/home';
import { ZoomContextProvider } from './providers/zoom';

function App() {
  const theme = createTheme({})
  return (
    <ThemeProvider theme={theme}>
      <ZoomContextProvider>
        <Home />
      </ZoomContextProvider>
    </ThemeProvider>
  );
}

export default App;
