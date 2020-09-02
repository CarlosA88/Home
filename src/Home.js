import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { useMemo } from "react";
import { TextField, makeStyles } from "@material-ui/core";
import { useEffect } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const Home = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  const classes = useStyles();

  const handleSubmit = () => {};
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
    </div>
  );
};

export default Home;
