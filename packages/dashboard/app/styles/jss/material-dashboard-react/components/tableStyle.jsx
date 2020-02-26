import {
  warningColor,
  primaryColor,
  dangerColor,
  successColor,
  infoColor,
  roseColor,
  grayColor,
  defaultFont,
  rooftopOrangeColor,
  rooftopYellowColor,
  rooftopBlueColor,
} from '../../material-dashboard-react.jsx';
import tasksStyle from './tasksStyle';

const tableStyle = theme => ({
  ...tasksStyle,
  warningTableHeader: {
    color: warningColor[0],
  },
  primaryTableHeader: {
    color: primaryColor[0],
  },
  dangerTableHeader: {
    color: dangerColor[0],
  },
  successTableHeader: {
    color: successColor[0],
  },
  infoTableHeader: {
    color: infoColor[0],
  },
  roseTableHeader: {
    color: roseColor[0],
  },
  grayTableHeader: {
    color: grayColor[0],
  },
  rooftopOrangeTableHeader: {
    color: rooftopOrangeColor[0],
  },
  rooftopYellowTableHeader: {
    color: rooftopYellowColor[0],
  },
  rooftopBlueTableHeader: {
    color: rooftopBlueColor[0],
  },
  table: {
    marginBottom: '0',
    width: '100%',
    maxWidth: '100%',
    backgroundColor: 'transparent',
    borderSpacing: '0',
    borderCollapse: 'collapse',
  },
  tableHeadCell: {
    color: 'inherit',
    ...defaultFont,
    fontSize: '1em',
  },
  tableCell: {
    ...defaultFont,
    lineHeight: '1.42857143',
    padding: '12px 8px',
    verticalAlign: 'middle',
  },
  tableResponsive: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
});

export default tableStyle;
