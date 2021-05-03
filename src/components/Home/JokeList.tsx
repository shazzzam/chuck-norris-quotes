import React from "react";
import { useSelector } from "react-redux";

import { JokeType, StateType } from "../../types";
import { Joke } from "./Joke";

export const JokeList: React.FC = () => {
  const jokes = useSelector((state: StateType) => state.jokesList);

  return (
    <>
      {jokes.map((joke: JokeType) => (
        <Joke key={joke.id} joke={joke.value} />
      ))}
    </>
  );
};
