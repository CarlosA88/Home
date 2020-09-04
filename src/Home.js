import React from "react";

import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
    h1: {
      backgroundColor: "red",
      color: "blue",
    },
  },
}));

const Home = () => {
  const classes = useStyles();

  //Currying
  // const multiply = (a, b) => a * b;
  const multiplyCurried = (a) => (b) => a * b; //This is a closure
  const multuplyBy5 = multiplyCurried(5); //we can store the value of 5 in the variable

  console.log(multuplyBy5(5));//Output is 25

  return (
    <div>
      <h1> Welcome to my Portfolio</h1>
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
// const animals = [
//   { id: 1, name: "tiger", lastName: "Fernan" },
//   { id: 2, name: "lion", lastName: "Lezz" },
// ];
