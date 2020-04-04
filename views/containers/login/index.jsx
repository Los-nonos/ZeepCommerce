import React from 'react';

// Components
import Main from '../../layouts/Main';
import Description from '../../components/Description';

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
