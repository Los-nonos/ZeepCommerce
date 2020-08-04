import {
  warningColor,
  primaryColor,
  dangerColor,
  successColor,
  infoColor,
  roseColor,
  grayColor,
  defaultFont,
} from '../../zeepCommerceStyles';

const tableStyle = {
  warning: {
    color: warningColor,
  },
  primary: {
    color: primaryColor[0],
  },
  danger: {
    color: dangerColor,
  },
  success: {
    color: successColor,
  },
  info: {
    color: infoColor,
  },
  rose: {
    color: roseColor,
  },
  gray: {
    color: grayColor,
  },
  right: {
    textAlign: 'right',
  },
  table: {
    marginBottom: '0',
    width: '100%',
    maxWidth: '100%',
    backgroundColor: 'transparent',
    borderSpacing: '0',
    borderCollapse: 'collapse',
    overflow: 'auto',
    '& > tbody > tr, & > thead > tr': {
      height: 'auto',
    },
  },
  tableShoppingHead: {
    fontSize: '0.75em !important',
    textTransform: 'uppercase !important',
  },
  tableCell: {
    ...defaultFont,
    lineHeight: '1.5em',
    padding: '12px 8px!important',
    verticalAlign: 'middle',
    fontSize: '0.875rem',
    borderBottom: 'none',
    borderTop: '1px solid ' + grayColor,
    position: 'relative',
    color: grayColor,
  },
  tableHeadCell: {
    fontSize: '1.063rem',
    borderBottomWidth: '1px',
    fontWeight: '300',
    color: grayColor,
    borderTopWidth: '0 !important',
  },
  tableCellTotal: {
    fontWeight: '500',
    fontSize: '1.0625rem',
    paddingTop: '20px',
    textAlign: 'right',
  },
  tableCellAmount: {
    fontSize: '26px',
    fontWeight: '300',
    marginTop: '5px',
    textAlign: 'right',
  },
  tableResponsive: {
    minHeight: '0.1%',
    overflowX: 'auto',
  },
  tableStripedRow: {
    backgroundColor: grayColor,
  },
  tableRowHover: {
    '&:hover': {
      backgroundColor: grayColor,
    },
  },
  warningRow: {
    backgroundColor: warningColor,
    '&:hover': {
      backgroundColor: warningColor,
    },
  },
  dangerRow: {
    backgroundColor: dangerColor,
    '&:hover': {
      backgroundColor: dangerColor,
    },
  },
  successRow: {
    backgroundColor: successColor,
    '&:hover': {
      backgroundColor: successColor,
    },
  },
  infoRow: {
    backgroundColor: infoColor,
    '&:hover': {
      backgroundColor: infoColor,
    },
  },
};

export default tableStyle;
