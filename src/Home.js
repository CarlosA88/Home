import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { useMemo } from "react";
import { TextField, makeStyles } from "@material-ui/core";
import { useEffect } from "react";
import Education from "./components/Profile/Education";

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
  const [users, setUser] = useState();

  const themeStyles = useMemo(() => {
    return {
      color: dark ? "red" : "blue",
    };
  }, [dark]);
  useEffect(() => {
    // console.log("Use theme");
  }, [themeStyles]);

  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);
  const getUser = async () => {
    const user = await fetch("https://jsonplaceholder.typicode.com/users").then(
      (resp) => {
        const data = resp.json();
        console.table(data);
      }
    );
    setUser(user);
  };

  function slowFunction(num) {
    for (let index = 0; index < 1; index++) {}
    // console.log("SlowFunction");
    return num * 2;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    document.getElementById(
      "standard-basic"
    ).textContent = localStorage.getItem("myLocalData");
  };

  const animals = [
    { id: 1, name: "tiger", lastName: "Fernan" },
    { id: 2, name: "lion", lastName: "Lezz" },
  ];
  console.table(animals);
  const names = ["James", "John", "Paul", "Ringo", "George"];

  
  return (
    <div>
      <h1> Welcome to my Portfolio</h1>
      <form
    className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <ul>
          {names
            .filter((u) => u.includes("J"))
            .map((n) => {
              return <li>{n}</li>;
            })}
        </ul>
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
        <div style={themeStyles}> {doubleNumber}</div>
      </form>
      <Education />
    </div>
  );
};

export default Home;

// const url = [
//   "https://jsonplaceholder.typicode.com/users",
//   "https://jsonplaceholder.typicode.com/posts",
//   "https://jsonplaceholder.typicode.com/albums",
// ];

// const getData = async () => {
//   try {
//     const [user, post, albums] = await Promise.all(
//       url.map((url) => fetch(url).then((resp) => resp.json()))
//     );
//     console.groupCollapsed("Json placeholder api");
//     console.table(user);
//     console.table(post);
//     console.table(albums);
//     console.groupEnd();
//   } catch (error) {
//     console.log(error);
//   }
// };
