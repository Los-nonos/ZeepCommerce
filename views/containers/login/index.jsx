import React from 'react';

// Components
import Main from '../../layouts/Main';
import Description from '../../components/Description';
// import withStyles from '@material-ui/core/styles/withStyles';
// import style from '../../../style/zeepCommerceStyle/pages/loginPage';

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
