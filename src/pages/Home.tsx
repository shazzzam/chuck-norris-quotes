import React from "react";
import { useDispatch } from "react-redux";

import { JokeList } from "../components/Home/JokeList";
import { jokeGet } from "../store/actions";
import "./home.scss";

export const HomePage: React.FC = () => {
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(jokeGet());
  };

  return (
    <div className="joke__container">
      <button onClick={clickHandler} className="joke__button">
        More!!!
      </button>
      <JokeList />
    </div>
  );
};
