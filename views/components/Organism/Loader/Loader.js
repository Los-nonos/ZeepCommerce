import React from "react";
import { connect } from "react-redux";
import LoadingOverlay from "react-loading-overlay";
import PropTypes from "prop-types";
import { actionNames } from "../../../../utils/constants/actionConstants";

const Loader = props => {
  const { loading, dispatch } = props;
  return (
    <>
      <LoadingOverlay
        spinner
        active={loading}
        text="Loading..."
        onClick={() => dispatch({ type: actionNames.renewToken })}
        styles={{
          wrapper: base => ({
            ...base,
            position: "inherit"
          }),
          overlay: base => ({
            ...base,
            zIndex: "1500"
          })
        }}
      />
    </>
  );
};

Loader.propTypes = {
  loading: PropTypes.bool
};

const mapStateToProps = state => {
  return state.generalReducer;
};

export default connect(mapStateToProps)(Loader);
