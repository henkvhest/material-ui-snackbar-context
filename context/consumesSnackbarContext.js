import React from "react";
import SnackbarContext from "./SnackbarContext";

export default function consumesSnackbarContext(Component) {
  return function ContextedComponent(props) {
    return (
      <SnackbarContext.Consumer>
        {context => <Component {...props} snackbarContext={context} />}
      </SnackbarContext.Consumer>
    );
  };
}
