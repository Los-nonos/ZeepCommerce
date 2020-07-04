import { drawerWidth, transition, container } from '../../zeepCommerceStyles';

const appStyle = theme => ({
  wrapper: {
    position: 'relative',
    top: '0',
    height: '100vh',
  },
  mainPanel: {
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
    overflow: 'auto',
    position: 'relative',
    float: 'right',
    ...transition,
    maxHeight: '100%',
    width: '100%',
    overflowScrolling: 'touch',
  },
  content: {
    padding: '0px 15px',
    minHeight: 'calc(100vh - 123px)',
    backgroundColor: '#000',
  },
  container: {
    ...container
  },
  map: {
    marginTop: '70px',
  },
  title: {
    textAlign: 'center',
  },
  center: {
    display: 'flex',
    minWidth: '100%',
    justifyContent: 'center',
  },
});

export default appStyle;
