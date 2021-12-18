import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  name = 'Nikola';
  age = 21;
  imgURL = 'https://source.unsplash.com/random';
}
