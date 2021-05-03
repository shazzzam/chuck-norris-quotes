import { JokeType } from "../types";
import { JOKE_GET, JOKE_LIST_UPDATE, JOKE_ADD, JOKE_LOAD } from "./types";

export const jokeGet = () => ({ type: JOKE_GET });

export const jokeAdd = (payload: JokeType) => ({
  type: JOKE_ADD,
  payload,
});

export const jokeLoad = () => ({ type: JOKE_LOAD });

export const jokeListUpdate = (payload: Array<JokeType>) => ({
  type: JOKE_LIST_UPDATE,
  payload,
});
