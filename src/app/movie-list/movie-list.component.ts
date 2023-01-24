import {Component, Input, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Movie} from '../Models/movie';
import {DataService} from '../Service/data.service';
import {MovieState} from '../Store/Reducers/movie.reducers';
import {movieSelector, movieUserSelector} from "../Store/selectors/movie.selectors";

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  movies$ = this.store.pipe(select(movieUserSelector));

  constructor(private store: Store<MovieState>) {
  }

  ngOnInit(): void {
  }
}
