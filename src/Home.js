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
  const [field1, setField1] = useState("");
  // const [field2, setField2] = useState("");
  // const slowFunct = useMemo(() => {
  //   return slowFunction(state);
  // }, [state]);

  // function slowFunction(num) {
  //   for (let index = 0; index < 1000000000; index++) {}
  //   console.log("SlowFunction");
  //   return num * 2;
  // }
 
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(field1);
    
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
          value={field1}
          onChange={(e) => setField1(e.target.value)}
        />
        {/* <TextField
          id="standard-basic"
          label="Standard"
          value={field2}
          onChange={(e) => setField2(e.target.value)}
        /> */}
        <Button variant="contained" color="secondary" onClick={handleSubmit}>
          Secondary
        </Button>
      </form>
      {field1}
    </div>
  );
};

export default Home;
