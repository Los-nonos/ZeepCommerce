import { container, primaryColor, successColor } from '../../zeepCommerceStyles';

const style = {
  cardHeader: {
    top: '100px',
    height: '100%',
    minHeight: '120vh',
    minWidth: '300px',
    display: 'inherit',
    position: 'relative',
    margin: '0',
    padding: '0',
    border: '0',
    backgroundColor: primaryColor,
    alignItems: 'center',
    '&:before': {
      //background: primaryColor,
    },
    '&:before,&:after': {
      position: 'absolute',
      zIndex: '1',
      width: '100%',
      height: '100%',
      display: 'block',
      left: '0',
      content: '""',
    },
    '& footer li a,& footer li a:hover,& footer li a:active': {
      color: '#FFFFFF',
    },
    '& footer': {
      position: 'absolute',
      bottom: '0',
      width: '100%',
    }
  },
  leftColumn: {
    paddingRight: '30px',
  },
  container: {
    ...container,
    zIndex: '2',
    position: 'relative',
    paddingTop: '10vh',
    color: '#FFFFFF',
    paddingBottom: '150px',
    overflow: 'hidden',
  },
  fromContact: {
    //maxWidth: '40vh',
    paddingTop: '8vh',
    marginLeft: '10vh !important',
    marginRight: '0px !important',
    display: 'block',
    height: '35vh',
    width: '100%',
    alignItems: 'center',
    alignContent: 'center',
    justify: 'center',
    color: '#fff'
  },
  inputs: {
    color: `${successColor} !important`
  },
  buttons: {
    zIndex: '400', left: '30% !important'
  },
  grids: {
    minWidth: '600px',
  }
}

export default style;