import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies = ['Paris is Burning', 'A Dog Day Afternoon', 'Lost in Translation', "Bob's Burgers", 'Coming to America'];

  constructor() { }

  ngOnInit() {
  }

  addMovie(movie: string) {
    if (movie === '') {
      alert("Please enter a movie.");
    } else if (this.movies.includes(movie)) {
      alert("Movie already on list.")
    } else {
      this.movies.push(movie);
    }
  }
}