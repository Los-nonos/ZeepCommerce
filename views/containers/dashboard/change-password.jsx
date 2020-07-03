import React from 'react';
import { connect } from 'react-redux';
// Components
import * as actions from '../../../actions/DashboardActions'
import Description from '../../components/Organism/dashboard/changePasswordModal';
import DashboardLayout from '../../layouts/DashboardLayout';
import { Roles } from '../../../utils/constants/Roles';

class ChangePasswordPage extends React.Component {
  constructor(props) {
    super(props);
    this.dispatch = props.dispatch;
  }

  componentDidMount() {
    this.dispatch(actions.checkRoles([Roles.webcustomer]))
  }

  render() {
    return (
      <DashboardLayout pageName="Zeep - Change password">
        <Description />
      </DashboardLayout>
    );
  }
}

const mapStateToProps = state => {
  return state.dashboardReducer;
};

export default connect(mapStateToProps)(ChangePasswordPage);
