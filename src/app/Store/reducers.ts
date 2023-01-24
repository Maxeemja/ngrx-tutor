import {ActionReducer, ActionReducerMap, MetaReducer} from "@ngrx/store";
import {movieReducer, MovieState, userReducer} from "./Reducers/movie.reducers";

export const reducers: ActionReducerMap<MovieState> = {
  movies: movieReducer,
  user: userReducer
};

const debugMeta = (reducer: ActionReducer<any>): ActionReducer<any> => {
  return (state, action) => {
    console.log('state: ', state);
    console.log('action: ', action);
    return reducer(state, action);
  }
}

export const metaReducers: MetaReducer<MovieState>[] = [debugMeta];
