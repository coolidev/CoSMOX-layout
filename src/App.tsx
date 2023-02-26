import { createTheme, ThemeProvider } from '@material-ui/core';
import Home from './pages/home';
import { ZoomContextProvider } from './providers/zoom';
import { PanelContextProvider } from "./providers/panel";
import { RatioContextProvider } from './providers/ratio';

function App() {
  const theme = createTheme({})
  return (
    <ThemeProvider theme={theme}>
      <RatioContextProvider>
        <ZoomContextProvider>
          <PanelContextProvider>
            <Home />
          </PanelContextProvider>
        </ZoomContextProvider>
      </RatioContextProvider>
    </ThemeProvider>
  );
}

export default App;
