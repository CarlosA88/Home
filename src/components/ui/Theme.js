import { createMuiTheme } from "@material-ui/core/styles";
// import purple from "@material-ui/core/colors/purple";
// import green from "@material-ui/core/colors/green";

const arcBlue = "#0B72B9";
const arcOrange = "#FFBA60";

export const theme = createMuiTheme({
  palette: {
    common: {
      blue: `${arcBlue}`,
      orange: `${arcOrange}`,
    },
    primary: {
      main: `${arcBlue}`,
      // main: purple[500],
    },
    secondary: {
      main: `${arcOrange}`,
      // main: green[500],
    },
  },
});
