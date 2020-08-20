import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { useMemo } from "react";
import { TextField, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const Home = () => {
  const classes = useStyles();
  const [number, setNumber] = useState(0);
  // const doubleNumber = slowFunction(number);
  const [dark, setDark] = useState(false);
  const themeStyles = {
    color: dark ? "red" : "blue",
  };

  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);
  // const large = new Array(100).fill("nemo");
  // const foundName = (array) => {
  //   let time1 = performance.now();
  //   console.log("Time to find nemo was" + time1);
  //   for (let index = 0; index < array.length; index++) {
  //     const element = array[index];
  //     if (element === "nemo") {
  //       console.log("nemo was found");
  //     }
  //   }
  //   let time2 = performance.now();
  //   console.log("Time to find nemo was" + (time2 - time1));
  // };

  // foundName(large);

  function slowFunction(num) {
    for (let index = 0; index < 1000000000; index++) {}
    console.log("SlowFunction");
    return num * 2;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(number);
  };
  return (
    <div>
      <h1> Welcome to my Portfolio</h1>
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          id="standard-basic"
          label="Standard"
          value={number}
          type="number"
          onChange={(e) => setNumber(e.target.value)}
        />

        <Button
          variant="contained"
          color="secondary"
          onClick={() => setDark((prevDark) => !prevDark)}
        >
          Secondary
        </Button>
      </form>
      <div style={themeStyles}> {doubleNumber}</div>
    </div>
  );
};

export default Home;
