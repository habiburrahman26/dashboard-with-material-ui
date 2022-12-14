import { CssBaseline, ThemeProvider } from '@mui/material';
import TopBar from './scenes/global/TopBar';
import { useMode, ColorModeContext } from './theme';
import { Dashboard } from '@mui/icons-material';
import { Outlet } from 'react-router-dom';
import { ProSidebarProvider } from 'react-pro-sidebar';
import SidebarTest from './scenes/global/Sidebar';

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ProSidebarProvider>
          <div className="app">
            <SidebarTest />
            <main className="content">
              <TopBar />
              <Outlet />
            </main>
          </div>
        </ProSidebarProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
