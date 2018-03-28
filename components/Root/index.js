import React, { Component } from "react";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";

import { tealA200, teal200, tealA400, grey50 } from "material-ui/styles/colors";
import injectTapEventPlugin from "react-tap-event-plugin";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { changeUiState, actionTypes } from "../../store/store";
import RegisterComponent from "../Register/Register";

if (!process.tapEventInjected) {
  injectTapEventPlugin();
  process.tapEventInjected = true;
}

class Root extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { userAgent, children } = this.props;
    const { regDialog } = this.props.ui;

    const muiTheme = getMuiTheme(
      {
        palette: {
          primary1Color: tealA200,
          primary2Color: teal200,
          primary3Color: tealA400,
          textColor: grey50
        }
      },
      {
        avatar: {
          borderColor: null
        },
        userAgent: userAgent
      }
    );

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <Dialog
            title="สมัครสมาชิก Yulgang"
            titleClassName="dialog-form-title"
            bodyClassName="dialog-form-body"
            paperClassName="dialog-form-paper"
            overlayClassName="dialog-form-overlay"
            autoScrollBodyContent={true}
            modal={true}
            open={regDialog}
            actions={[
              <FlatButton
                label="ยกเลิก"
                primary={true}
                onClick={() => this.props.triggerUiDialog("regDialog", false)}
              />
            ]}
          >
            <RegisterComponent />
          </Dialog>
          {children}
        </div>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = ({ ui }) => ({ ui });

const mapDispatchToProps = dispatch => {
  return {
    triggerUiDialog: (name, state) =>
      changeUiState(
        {
          type: actionTypes.UI_CHANGE,
          name: name,
          state: state
        },
        dispatch
      )
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Root);
