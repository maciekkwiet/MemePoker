import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  grid: {
    marginTop: theme.spacing(5),
    backgroundColor: theme.palette.grey.A400,
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: '5px',
  },
  main: {
    marginRight: 0,
  },
  mainTop: {
    boxSizing: 'border-box',
    marginBottom: theme.spacing(2),
    display: 'grid',
    gridTemplateColumns: '80% 20%',
    gridTemplateRows: 'repeat(2, 1fr)',
    gap: '1rem 0',
  },
  userName: {
    borderColor: theme.palette.primary.main,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  cards: {
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(2),
  },
  results: {
    backgroundColor: theme.palette.secondary.main,
    minHeight: '100%',
  },
}));

export default useStyles;
