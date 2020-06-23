import { createStyles, Theme, makeStyles } from '@material-ui/core';

export const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      marginLeft: theme.spacing(2),
    },
    content: {
      flexGrow: 1,
      paddingLeft: theme.spacing(2),
    },
  });

const useStyles = makeStyles(styles, {
  classNamePrefix: 'App',
});
export default useStyles;
