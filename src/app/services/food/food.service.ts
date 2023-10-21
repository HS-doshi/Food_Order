import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll(): string[] {
    return [
      '/assets/pizza.jpg',
      '/assets/panipuri.jpg',
      '/assets/chinese.jpg',
      '/assets/punjabi.jpg',
      '/assets/gujarati.jpg',
      '/assets/idali.jpg',
      '/assets/dhosa.jpg',
      '/assets/dalbati.jpg',
    ]
  }
}
