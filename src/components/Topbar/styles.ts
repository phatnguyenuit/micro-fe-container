import { createStyles, Theme, makeStyles } from '@material-ui/core';

export const styles = (theme: Theme) =>
  createStyles({
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
  });

const useStyles = makeStyles(styles, { classNamePrefix: 'Topbar' });
export default useStyles;
