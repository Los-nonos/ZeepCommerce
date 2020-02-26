import {
  defaultFont,
  primaryColor,
  dangerColor,
  grayColor,
  rooftopBlueColor,
} from '../../material-dashboard-react.jsx';
import tooltipStyle from '../../material-dashboard-react/tooltipStyle.jsx';
import checkboxAdnRadioStyle from '../../material-dashboard-react/checkboxAdnRadioStyle.jsx';
import { successColor } from '../../material-dashboard-react';
const tasksStyle = {
  ...tooltipStyle,
  ...checkboxAdnRadioStyle,
  table: {
    marginBottom: '0',
    overflow: 'visible',
  },
  tableRow: {
    position: 'relative',
    borderBottom: '1px solid ' + grayColor[5],
  },
  tableActions: {
    display: 'flex',
    border: 'none',
    padding: '12px 8px',
    verticalAlign: 'middle',
  },
  tableCell: {
    ...defaultFont,
    padding: '8px',
    verticalAlign: 'middle',
    border: 'none',
    lineHeight: '1.42857143',
    fontSize: '14px',
  },
  tableCellRTL: {
    textAlign: 'right',
  },
  tableActionButton: {
    width: '27px',
    height: '27px',
    padding: '0',
  },
  tableActionButtonIcon: {
    width: '17px',
    height: '17px',
  },
  edit: {
    backgroundColor: 'transparent',
    color: rooftopBlueColor[0],
    boxShadow: 'none',
  },
  close: {
    backgroundColor: 'transparent',
    color: dangerColor[0],
    boxShadow: 'none',
  },
  done: {
    backgroundColor: 'transparent',
    color: successColor[0],
    boxShadow: 'none',
  },
};
export default tasksStyle;
