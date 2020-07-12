import ActivateAccount from '../../views/containers/login/Activate';
import { pages, redirectTo } from '../../utils/helpers/redirectTo';
import React from 'react';

const getServerSideProps = (ctx) => {
  const token = ctx.params.token;
  if(!token) {
    redirectTo(pages.error);
  }
  return { token };
}
const Token = (props) => {
  return <ActivateAccount token={props.token} />
}

export default Token;
export { getServerSideProps };
