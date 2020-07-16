const historyModalContentStyles = theme => ({
  root: {
    position: 'relative',
    /* height: '80vh',
    overflowY: 'scroll', */
  },
  container: {},
  closeButton: {
    position: 'absolute',
    right: theme.spacing(3),
    top: theme.spacing(0.5),
    color: theme.palette.primary.main,
  },
});

export default historyModalContentStyles;
