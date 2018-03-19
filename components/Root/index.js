import React, { Component } from "react"
import getMuiTheme from "material-ui/styles/getMuiTheme"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import {
	tealA200,
	teal200,
	tealA400,
	grey50
} from "material-ui/styles/colors"
import injectTapEventPlugin from "react-tap-event-plugin"

if (!process.tapEventInjected) {
	injectTapEventPlugin()
	process.tapEventInjected = true
}

class Root extends Component {
	constructor(props, context) {
		super(props, context)
	}

	render() {
		const { userAgent, children } = this.props

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
    )

		return <MuiThemeProvider muiTheme={muiTheme}>{children}</MuiThemeProvider>
	}
}

export default Root
