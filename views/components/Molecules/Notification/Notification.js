import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Snackbar from "../Snackbar/Snackbar";
import Close from "@material-ui/icons/Close";
import Check from "@material-ui/icons/Check";

class Notification extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { closeNotification } = this.props;

    return (
      <Snackbar
        place="tr"
        color={"danger"}
        icon={this.props.notificationColor === "danger" ? Close : Check}
        message={this.props.message}
        open={this.props.notification}
        closeNotification={closeNotification}
        close
      />
    );
  }
}
Notification.propTypes = {
  closeNotification: PropTypes.func,
  notificationColor: PropTypes.string,
  message: PropTypes.string,
  notification: PropTypes.bool
};

const mapStateToProps = state => {
  return state.generalReducer;
};

export default connect(mapStateToProps)(Notification);
