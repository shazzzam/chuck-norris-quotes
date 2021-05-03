import { Store } from "redux";
import { jokeLoad } from "../store/actions";

export const localStorageMiddleware = (store: Store) => (next) => {
  Promise.resolve(1).then(() => store.dispatch(jokeLoad()));
  return (action) => next(action);
};
