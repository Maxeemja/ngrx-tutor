import {createReducer, on} from '@ngrx/store';
import {Movie} from 'src/app/Models/movie';
import {
  addMovies,
  addMoviesSuccess, assignUser,
  getMoviesSuccess,
} from '../Actions/movie.action';

export interface MovieState {
  movies: ReadonlyArray<Movie>;
  user: Readonly<string>;
}

const initialState: ReadonlyArray<Movie> = [];

export const movieReducer = createReducer(
  initialState,
  on(getMoviesSuccess, (state, {movies}) => [...movies]),
  on(addMoviesSuccess, (state, {movie}) => [...state, movie])
);

const initialUserState = 'MXMJ';
export const userReducer = createReducer(
  initialUserState,
  on(assignUser, (state, {user}) => user)
);
