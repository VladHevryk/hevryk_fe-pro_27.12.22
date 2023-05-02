import { useReducer } from "react";
import Hamburger from "./components/hamburger/hamburger";
import HamburgerAdded from "./components/hamburgerAdded/hamburgerAdded";
import HamburgerFillings from "./components/hamburgerFillings/hamburgerFillings";
import HamburgerScore from "./components/hamburgerScore/hamburgerScore";
import { initialState, reducer } from "./store";
import { ADD_ADDITION, ADD_FILLING, CHOOSE_SIZE } from "./store/actions";

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const chooseBurger = (burger) => {
    dispatch({
      type: CHOOSE_SIZE,
      payload: burger,
    });
  };

  const addFilling = (filling) => {
    dispatch({
      type: ADD_FILLING,
      payload: filling,
    });
  };

  const addAddition = (addition) => {
    dispatch({
      type: ADD_ADDITION,
      payload: addition,
    });
  };

  const calculateScore = () => {
    let total = state.burger ? state.burger.price : 0;
    let calories = state.burger ? state.burger.calories : 0;

    state.fillings.forEach((filling) => {
      total += filling.price;
      calories += filling.calories;
    });

    state.additions.forEach((addition) => {
      total += addition.price;
      calories += addition.calories;
    });

    return console.log({ total, calories });
  };

  return (
    <div>
      <Hamburger title={"Choose your size"} onChooseBurger={chooseBurger} />
      {state.burger && (
        <div>
          <HamburgerFillings
            title={"Choose your filling"}
            onAddFilling={addFilling}
          />
          <HamburgerAdded
            title={"Choose your addition"}
            onAddAddition={addAddition}
          />
          <HamburgerScore onCalculateScore={calculateScore} />
        </div>
      )}
    </div>
  );
};

export default App;
