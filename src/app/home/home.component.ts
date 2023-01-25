import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Movie } from '../Models/movie';
import { addMovies, assignUser, getMovies, logout } from '../Store/Actions/movie.action';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  movies: Movie[] = [];
  newMovie: Movie = new Movie();
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.getAllMovies();
  }

  getAllMovies(): void {
    this.store.dispatch(getMovies());
    this.store.dispatch(assignUser('MXMJ'));
  }

  addNewMovies(): void {
    this.store.dispatch(addMovies(this.newMovie));
    this.newMovie = new Movie();
  }

  changeUser(): void {
    this.store.dispatch(assignUser('ABOBA'));
  }

  logout(): void {
    this.store.dispatch(logout());
  }
}
