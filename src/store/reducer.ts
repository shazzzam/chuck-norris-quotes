import { StateType } from "../types";
import { JOKE_LIST_UPDATE, JOKE_ADD, JokeActionTypes } from "./types";

const initialState: StateType = {
  jokesList: [],
};

export const reducer = (
  state: StateType = initialState,
  action: JokeActionTypes
): StateType => {
  switch (action.type) {
    case JOKE_ADD: {
      return { ...state, jokesList: [...state.jokesList, action.payload] };
    }
    case JOKE_LIST_UPDATE: {
      return { ...state, jokesList: action.payload };
    }
    default: {
      return state;
    }
  }
};
