import React, { memo, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import MicroApp from '../MicroApp';
import { Typography } from '@material-ui/core';

export const MICRO_APPS = [
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

export const RoutesComponent: React.FC = () => (
  <Suspense fallback="Loading child page">
    <Switch>
      <Route
        exact
        path="/"
        render={() => <Typography variant="body1">Home</Typography>}
      />
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
      <Route path="*" render={() => <p>Not Found</p>} />
    </Switch>
  </Suspense>
);

const Routes = memo(RoutesComponent);
Routes.displayName = 'Routes';

export default Routes;
