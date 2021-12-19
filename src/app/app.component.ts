import { Component } from '@angular/core';

import { Product } from './product.model';

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
  widthImg = 100;
  names: string[] = ['Nicolas', 'Julian', 'Santi'];
  newName: string = '';
  register = {
    name: '',
    email: '',
    password: '',
  };
  box = {
    width: 100,
    height: 100,
    backgroundColor: 'red',
  };
  products: Product[] = [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: './assets/images/toy.jpg',
      category: 'all',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bike.jpg',
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/album.jpg',
    },
    {
      name: 'Mis libros',
      price: 23,
      image: './assets/images/books.jpg',
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: './assets/images/house.jpg',
    },
    {
      name: 'Gafas',
      price: 3434,
      image: './assets/images/glasses.jpg',
    },
  ];

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

  addName(): void {
    this.names.push(this.newName);
    this.newName = '';
  }

  deleteName(index: number): void {
    this.names.splice(index, 1);
  }

  onRegister(): void {
    console.log(this.register);
  }
}
