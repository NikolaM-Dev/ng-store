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
  btnDisabled = true;

  person = {
    name: 'Nikola',
    age: 21,
    avatar: 'http://www.w3schools.com/howto/img_avatar.png',
  };
}
