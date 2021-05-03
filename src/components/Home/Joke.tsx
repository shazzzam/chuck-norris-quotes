import React from "react";

import "./joke.scss";

type JokeProps = {
  joke: string;
};

export const Joke: React.FC<JokeProps> = ({ joke }) => {
  return <div className="joke__item">{joke}</div>;
};
