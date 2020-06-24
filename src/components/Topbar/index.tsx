import React, { memo, useCallback, useState } from 'react';
import clsx from 'clsx';

import { Link } from 'react-router-dom';

import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Grid,
  Menu,
  MenuItem,
} from '@material-ui/core';

import { MoreVert as MoreVertIcon } from '@material-ui/icons';

import useStyles from './styles';
import pkg from '../../../package.json';

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

export const TopbarComponent: React.FC = () => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    },
    []
  );

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar position="fixed" className={clsx(classes.appBar)}>
      <Toolbar>
        <Typography variant="h6">{pkg.name.toUpperCase()}</Typography>
        <Grid container justify="flex-end">
          <Grid item>
            <IconButton
              aria-label="Menu"
              edge="end"
              color="inherit"
              aria-haspopup="true"
              onClick={handleClick}
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              {/* Home */}
              <Link to={'/'}>
                <MenuItem onClick={handleClose}>Home</MenuItem>
              </Link>
              {MICRO_APPS.map(({ path, name }) => (
                <Link key={path} to={path}>
                  <MenuItem onClick={handleClose}>{name}</MenuItem>
                </Link>
              ))}
            </Menu>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

const Topbar = memo(TopbarComponent);
Topbar.displayName = 'Topbar';

export default Topbar;
