import { createTheme, ThemeProvider } from '@material-ui/core';
import Home from './pages/home';
import { ZoomContextProvider } from './providers/zoom';
import { PanelContextProvider } from "./providers/panel";

function App() {
  const theme = createTheme({})
  return (
    <ThemeProvider theme={theme}>
      <ZoomContextProvider>
        <PanelContextProvider>
          <Home />
        </PanelContextProvider>
      </ZoomContextProvider>
    </ThemeProvider>
  );
}

export default App;
