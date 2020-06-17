import React from 'react';

// Components
import Main from '../../layouts/Main';
import Description from '../../layouts/dashboard/changePasswordModal.jsx';

class ChangePasswordPage extends React.Component {
  render() {
    return (
      <Main pageName="Zeep - Change password">
        <Description />
      </Main>
    );
  }
}

export default ChangePasswordPage;
