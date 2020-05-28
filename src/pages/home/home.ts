import { Component, ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';

import { MovieProvider } from '../../providers/movie/movie';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Slides) slides: Slides;

  popular_movies: any;

  constructor(public navCtrl: NavController, private movieProvider: MovieProvider) {

  }

  slideChanged(): void {
    console.log(this.slides.controlBy);
  }

  ionViewWillEnter() {
    this.movieProvider.getPopular().subscribe(response => {
      this.popular_movies = response.results;
      this.popular_movies.forEach(movie => {
        movie.poster_path = "https://image.tmdb.org/t/p/w500" + movie.poster_path; 
      });
    });
  }
}
