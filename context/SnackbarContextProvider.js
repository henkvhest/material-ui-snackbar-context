import React from "react";
import SnackbarContext from "./SnackbarContext";
import Snackbar from "../components/Snackbar/Snackbar";

export default class SnackbarContextProvider extends React.Component {
  state = {
    snackbarMessage: "",
    autoHideDuration: undefined,
    actionNeeded: false,
    setActionNeeded: value => {
      this.setState({ actionNeeded: value });
    },
    setAutoHideDuration: duration => {
      this.setState({ autoHideDuration: duration });
    },
    setSnackbarMessage: message => {
      this.setState({ snackbarMessage: message });
    },
    closeSnackbar: () => {
      this.setState({ snackbarMessage: "" });
    }
  };

  render() {
    return (
      <SnackbarContext.Provider value={this.state}>
        {this.props.children}
        <Snackbar />
      </SnackbarContext.Provider>
    );
  }
}
