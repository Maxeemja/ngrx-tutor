import {Injectable} from '@angular/core';
import {createEffect, Actions, ofType} from '@ngrx/effects';
import {EMPTY, EmptyError} from 'rxjs';
import {catchError, concatMap, exhaustMap, map, mergeMap, tap} from 'rxjs/operators';
import {DataService} from 'src/app/Service/data.service';
import {
  getMovies,
  getMoviesSuccess,
  addMovies,
  addMoviesSuccess, deleteMovie, deleteMovieSuccess, updateMovieSuccess, updateMovie,
} from '../Actions/movie.action';

@Injectable()
export class MovieEffects {
  loadMovie$ = createEffect(() =>
    this.action$.pipe(
      ofType(getMovies),
      exhaustMap(() =>
        this.dataService.getMovies().pipe(
          map((movies) => getMoviesSuccess(movies)),
          catchError(() => EmptyError)
        )
      )
    )
  );

  addMovie$ = createEffect(() =>
    this.action$.pipe(
      ofType(addMovies),
      tap((movie) => console.log(movie)),
      concatMap(({movie}) =>
        this.dataService.addMovies(movie).pipe(
          map((newMovie) => addMoviesSuccess(newMovie)),
          catchError(() => EmptyError)
        )
      )
    )
  );

  deleteMovie$ = createEffect(() =>
    this.action$.pipe(
      ofType(deleteMovie),
      mergeMap(({id}) =>
        this.dataService.deleteMovie(id).pipe(
          map(() => deleteMovieSuccess(id)),
          catchError(() => EMPTY)
        )
      )
    )
  );

  updateMovie$ = createEffect(() =>
    this.action$.pipe(
      ofType(updateMovie),
      concatMap(({movie}) =>
        this.dataService.updateMovie(movie).pipe(
          map(() => updateMovieSuccess(movie)),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(private action$: Actions, private dataService: DataService) {
  }
}
