import { takeEvery, put, call, select } from "redux-saga/effects";

import { JOKE_GET, JOKE_LOAD } from "./types";
import { jokeAdd, jokeListUpdate } from "./actions";
import { JokeType } from "../types";

const fetchJoke = async () => {
  const res = await fetch("https://api.chucknorris.io/jokes/random");
  const data = await res.json();
  return data;
};

const saveList = (jokesList: Array<JokeType>) => {
  if (typeof localStorage === "undefined") {
    return;
  }
  const jsonData = JSON.stringify(jokesList);
  localStorage.setItem("jokes", jsonData);
};

function* getWorker() {
  const joke: JokeType = yield call(fetchJoke);
  yield put(jokeAdd(joke));
  const jokesList: Array<JokeType> = yield select((state) => state.jokesList);
  yield call(saveList, jokesList);
}

const loadJokes = () => {
  try {
    const data = localStorage.getItem("jokes");
    const jokesList = data ? JSON.parse(data) : null;
    return jokesList ? jokesList : [];
  } catch {
    return [];
  }
};

function* loadWorker() {
  const jokesList: Array<JokeType> = yield call(loadJokes);
  console.log(jokesList);
  yield put(jokeListUpdate(jokesList));
}

export function* sagaWatcher() {
  yield takeEvery(JOKE_GET, getWorker);
  yield takeEvery(JOKE_LOAD, loadWorker);
}
