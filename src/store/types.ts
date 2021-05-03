import { JokeType } from "../types";

export const JOKE_GET = "JOKE_GET";
export const JOKE_LIST_UPDATE = "JOKE_LIST_UPDATE";
export const JOKE_ADD = "JOKE_ADD";
export const JOKE_LOAD = "JOKE_LOAD";

interface JokeGetAction {
  type: typeof JOKE_GET;
}

interface JokeLoadAction {
  type: typeof JOKE_LOAD;
}

interface JokeAddAction {
  type: typeof JOKE_ADD;
  payload: JokeType;
}

interface JokeListUpdateAction {
  type: typeof JOKE_LIST_UPDATE;
  payload: Array<JokeType>;
}

export type JokeActionTypes =
  | JokeGetAction
  | JokeListUpdateAction
  | JokeAddAction
  | JokeLoadAction;
