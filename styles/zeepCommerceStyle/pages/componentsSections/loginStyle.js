import { container } from '../../../zeepCommerceStyles';

import image from '../../../../public/logoNav.jpeg';

const loginStyle = {
  section: {
    minHeight: '110vh',
    maxHeight: '1600px',
    overflow: 'hidden',
    padding: '70px 0',
    backgroundPosition: 'top center',
    backgroundSize: 'cover',
    margin: '0',
    border: '0',
    display: 'flex',
    alignItems: 'center',
    backgroundImage: 'url(' + image + ')',
  },
  container: {
    ...container,
    zIndex: '2',
    position: 'relative',
    paddingTop: '25vh',
    color: '#FFFFFF',
    paddingBottom: '64px',
    overflow: 'hidden',
  },
  form: {
    margin: '0',
  },
  cardHeader: {
    width: 'auto',
    textAlign: 'center',
    marginLeft: '20px',
    marginRight: '20px',
    marginTop: '-40px',
    padding: '20px 0',
    marginBottom: '15px',
  },
  socialIcons: {
    maxWidth: '24px',
    marginTop: '0',
    width: '100%',
    transform: 'none',
    left: '0',
    top: '0',
    height: '100%',
    lineHeight: '41px',
    fontSize: '20px',
  },
  divider: {
    marginTop: '30px',
    marginBottom: '0px',
    textAlign: 'center',
  },
  cardFooter: {
    paddingTop: '0rem',
    border: '0',
    borderRadius: '6px',
    justifyContent: 'center !important',
  },
  socialLine: {
    marginTop: '1rem',
    textAlign: 'center',
    padding: '0',
  },
  inputIconsColor: {
    color: '#495057',
  },
  pageHeader: {
    //minHeight: '100vh',
    height: '100%',
    display: 'inherit',
    position: 'relative',
    margin: '0',
    padding: '0',
    border: '0',
    alignItems: 'center',
    '&:before': {
      //background: 'rgba(0, 0, 0, 0.5)',
    },
    '&:before,&:after': {
      position: 'absolute',
      zIndex: '1',
      width: '100%',
      height: '100%',
      display: 'block',
      left: '0',
      top: '0',
      content: '""',
    },
    '& footer li a,& footer li a:hover,& footer li a:active': {
      color: '#FFFFFF',
    },
    '& footer': {
      position: 'absolute',
      bottom: '0',
      width: '100%',
    },
  },
};

export default loginStyle;
