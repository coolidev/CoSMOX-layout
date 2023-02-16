import { createTheme, ThemeProvider } from '@material-ui/core';
import Home from './pages/home';

function App() {
  const theme = createTheme({})
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
