import React from 'react';
import { pages, redirectTo } from '../../utils/helpers/redirectTo';

class CartIndex extends React.Component {
  render() {
    return (
      <>
        <h1>HOLA</h1>
        <p
          onClick={() => {
            redirectTo(pages.checkout);
          }}
        >
          ir
        </p>
      </>
    );
  }
}

export default CartIndex;
