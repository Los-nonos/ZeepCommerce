import React from 'react';
import GridContainer from '../components/Atoms/Grid/GridContainer';
import GridItem from '../components/Atoms/Grid/GridItem';
import CustomInput from '../components/Atoms/CustomInput/CustomInput';

class Description extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <GridContainer justify="center">
        <GridItem className="grid-xs-4">
          <CustomInput labelText="Username" />
        </GridItem>
        <GridItem className="grid-xs-4">
          <CustomInput labelText="Password" />
        </GridItem>
      </GridContainer>
    );
  }
}

export default Description;
