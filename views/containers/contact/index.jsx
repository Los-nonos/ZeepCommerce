import React from 'react';
import Description from '../../layouts/Contact/Description';
import Main from '../../layouts/Main';

class ContactContainer extends React.Component {
  render() {
    return (
      <>
        <Main pageName={'Contact - Zeep'}>
          <Description />
        </Main>
      </>
    );
  }
}

export default ContactContainer;