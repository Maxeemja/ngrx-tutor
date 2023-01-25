import {RouterReducerState} from '@ngrx/router-store';
import {
  createReducer,
  on,
} from '@ngrx/store';
import {Movie} from 'src/app/Models/movie';
import {
  addMoviesSuccess,
  assignUser, deleteMovieSuccess,
  getMoviesSuccess, updateMovieSuccess,
} from '../Actions/movie.action';

export interface MovieState {
  movies: ReadonlyArray<Movie>;
  user: Readonly<string>;
  router: RouterReducerState<any>;
}

const initialState: ReadonlyArray<Movie> = [];

export const movieReducer = createReducer(
  initialState,
  on(getMoviesSuccess, (state, {movies}) => [...movies]),
  on(addMoviesSuccess, (state, {movie}) => [...state, movie]),
  on(deleteMovieSuccess, (state, {id}) => state.filter(m => m.id !== id)),
  on(updateMovieSuccess, (state, {movie: editedMovie}) => {
    return state.map((movie) => movie.id === editedMovie.id ? editedMovie : movie);
  }),
);

const initialUserSate = '';
export const userReducer = createReducer(
  initialUserSate,
  on(assignUser, (state, {user}) => user)
);
