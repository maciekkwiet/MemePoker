import { makeStyles } from '@material-ui/core/styles';

const leaveRoomButtonStyles = makeStyles(theme => ({
  root: {
    '&.MuiChip-root': {
      marginRight: 0,
    },
  },
}));

export default leaveRoomButtonStyles;
