import { primaryColor, dangerColor, successColor, defaultFont } from '../../zeepCommerceStyles';

const customInputStyle = {
  disabled: {
    '&:before': {
      borderColor: 'transparent !important',
    },
  },
  underline: {
    '&:hover:not($disabled):before,&:before': {
      borderColor: '#D2D2D2 !important',
      borderWidth: '1px !important',
    },
    '&:after': {
      borderColor: successColor,
    },
  },
  underlineError: {
    '&:after': {
      borderColor: dangerColor,
    },
  },
  underlineSuccess: {
    '&:after': {
      borderColor: successColor,
    },
  },
  whiteUnderline: {
    '&:hover:not($disabled):before,&:before': {
      borderColor: '#FFFFFF',
    },
    '&:after': {
      borderColor: '#FFFFFF',
    },
  },
  labelRoot: {
    ...defaultFont,
    color: successColor,
    fontWeight: '400',
    fontSize: '14px',
    lineHeight: '1.42857',
    top: '10px',
    letterSpacing: 'unset',
    '& + $underline': {
      marginTop: '0px',
    },
  },
  labelRootError: {
    color: dangerColor + ' !important',
  },
  labelRootSuccess: {
    color: successColor + ' !important',
  },
  formControl: {
    margin: '0 0 17px 0',
    paddingTop: '27px',
    zIndex: 400,
    width: '70%',
    position: 'relative',
    '& svg,& .fab,& .far,& .fal,& .fas,& .material-icons': {
      //color: '#495057',
    },
  },
  input: {
    color: '#fff',
    height: 'unset',
    '&,&::placeholder': {
      fontSize: '14px',
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: '400',
      lineHeight: '1.42857',
      opacity: '1',
    },
    '&::placeholder': {
      color: successColor,
    },
  },
  whiteInput: {
    '&,&::placeholder': {
      color: '#FFFFFF',
      opacity: '1',
    },
  },
};

export default customInputStyle;
