import React from 'react';
import CardBody from '../../Atoms/Card/CardBody';

class OrderCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {

    return (
      <div>
        <CardBody>
          <p>{this.props.order.name}</p>
        </CardBody>
      </div>
    );
  }
}

export default OrderCard;