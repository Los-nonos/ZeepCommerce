import React from 'react';

// Components
import Main from '../../layouts/Main';
import Description from '../../layouts/Login/Description';

class LoginPage extends React.Component {
  render() {
    return (
      <Main pageName="Zeep - Login">
        <Description />
      </Main>
    );
  }
}

export default LoginPage;
