import {createFeatureSelector, createSelector} from '@ngrx/store';
import {MovieState} from '../Reducers/movie.reducers';
import {Movie} from '../../Models/movie';

const featureSelector = createFeatureSelector<MovieState>('movies');
export const movieSelector = createSelector(
  featureSelector,
  (movies: MovieState) => movies.movies
);


export const movieUserSelector = createSelector(
  (state: MovieState) => state.movies,
  (state: MovieState) => state.user,
  (movies: ReadonlyArray<Movie>, user: Readonly<string>) => {
    return movies.filter((movie: Movie) => movie.userName === user);
  }
);
