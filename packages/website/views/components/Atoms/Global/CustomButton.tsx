import Button from '@material-ui/core/Button';
import React from 'react';

class CustomButton extends React.Component<any, any> {
  render() {
    return (
      <div>
        <Button variant="contained" color="primary">
          {this.props.content}
        </Button>
      </div>
    );
  }
}

export default CustomButton;
