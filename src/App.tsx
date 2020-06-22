import React from 'react';
import clsx from 'clsx';

import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import { BrowserRouter } from 'react-router-dom';

import useStyles from './App.styles';
import theme from './theme';
import Topbar from './components/Topbar';
import Routes from './routes';

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <div className={classes.root}>
          <Topbar />
          <main className={clsx(classes.content)}>
            <div className={classes.drawerHeader} />
            <Routes />
          </main>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
