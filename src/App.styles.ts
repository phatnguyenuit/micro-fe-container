import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

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
      paddingLeft: theme.spacing(4),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
  });

const useStyles = makeStyles(styles, {
  classNamePrefix: 'App',
});
export default useStyles;
