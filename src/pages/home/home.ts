import { Component, ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Slides) slides: Slides;

  constructor(public navCtrl: NavController) {

  }

  slideChanged(): void {
    console.log(this.slides.controlBy);
  }

  ionViewDidEnter() {
    console.log('Home ionViewDidEnter');
  }
}
