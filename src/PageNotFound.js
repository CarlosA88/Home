import React from "react";
import SentimentVeryDissatisfiedIcon from "@material-ui/icons/SentimentVeryDissatisfied";

const PageNotFound = () => {
  const style = {
    root: {
      textAlign: "center",
      alignContent: "center",
    },
    notfound: {
      fontSize: 72,
      fontWeight: "bold",
    },
    iconNotfound: {
      height: 50,
      width: 50,
    },
  };

  return (
    <div style={style.root}>
      <h1> Page Not Found</h1>
      <div style={style.notfound}>404</div>
      <SentimentVeryDissatisfiedIcon style={style.iconNotfound} />
    </div>
  );
};

export default PageNotFound;
