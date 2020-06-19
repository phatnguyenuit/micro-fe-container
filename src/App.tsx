import React from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import MicroApp from './MicroApp';

const MICRO_APPS = [
  {
    host: 'http://localhost:4001',
    name: 'app-child-1',
    path: '/app-1',
  },
  {
    host: 'http://localhost:4002',
    name: 'app-child-2',
    path: '/app-2',
  },
];

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <span>Micro Apps</span>
        </header>
      </div>
      <ul>
        <li>
          <NavLink to={'/'}>Home</NavLink>
        </li>
        {MICRO_APPS.map(({ path, name, host }) => (
          <li key={`${name}-link`}>
            <NavLink to={path}>{name}</NavLink>
          </li>
        ))}
      </ul>
      <Switch>
        <Route path="/" exact render={() => 'Container Home'} />
        {MICRO_APPS.map(({ path, name, host }) => (
          <Route
            key={`${name}-route`}
            path={path}
            render={() => (
              <MicroApp
                key={name}
                name={name}
                host={host}
                window={window}
                document={document}
                basename={path}
              />
            )}
          />
        ))}
        <Route path="*" render={() => 'Not Found'} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
