import React from 'react';
import { connect } from 'react-redux';
// Components
import Main from '../../layouts/Main';
import Description from '../../components/Organism/dashboard/changePasswordModal';

class ChangePasswordPage extends React.Component {
  render() {
    return (
      <Main pageName="Zeep - Change password">
        <Description />
      </Main>
    );
  }
}

const mapStateToProps = state => {
  return state.dashboardReducer;
}

export default connect(mapStateToProps)(ChangePasswordPage);
