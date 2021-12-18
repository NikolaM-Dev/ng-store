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

  toggleButton(): void {
    this.btnDisabled = !this.btnDisabled;
  }

  increaseAge(): void {
    this.person.age += 1;
  }

  onScroll(event: Event): void {
    const { scrollTop } = event.target as HTMLElement;
    console.log(scrollTop);
  }

  chageName(event: Event): void {
    const { value } = event.target as HTMLInputElement;
    this.person.name = value;
  }
}
