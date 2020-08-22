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
  const classes = useStyles();
  const [number, setNumber] = useState(0);
  // const doubleNumber = slowFunction(number);
  const [dark, setDark] = useState(false);

  const themeStyles = useMemo(() => {
    return {
      color: dark ? "red" : "blue",
    };
  }, [dark]);
  useEffect(() => {
    console.log("Use theme");
  }, [themeStyles]);
  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  function slowFunction(num) {
    for (let index = 0; index < 1000000000; index++) {}
    console.log("SlowFunction");
    return num * 2;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(number);
  };

  const user = {
    name: "kim",
    active: true,
    cart: [],
    purchase: [],
  };
  let amazonHistory = [];
  const compose = (f, g) => (...args) => f(g(...args));
  const purchaseItem = (...fns) => {
    return fns.reduce(compose);
  };
  console.log(
    purchaseItem(
      emptyCart,
      buyItem,
      applyTaxToItem,
      addItemToCart
    )(user, { name: "laptop", price: 300 })
  );
  console.log("History!! ", amazonHistory);

  function addItemToCart(user, item) {
    amazonHistory.push(user);
    const updatecart = user.cart.concat(item);
    return Object.assign({}, user, { cart: updatecart });
  }
  function applyTaxToItem(user) {
    amazonHistory.push(user);
    const { cart } = user;
    const taxRate = 1.3;
    const updatedCart = cart.map((item) => {
      return {
        name: item.name,
        price: item.price * taxRate,
      };
    });
    return Object.assign({}, user, { cart: updatedCart });
  }
  function buyItem(user) {
    amazonHistory.push(user);
    return Object.assign({}, user, { purchase: user.cart });
  }
  function emptyCart(user) {
    amazonHistory.push(user);
    return Object.assign({}, user, { cart: [] });
  }

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
