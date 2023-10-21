import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll(): Foods[] {
    return [
      {
        id: 1,
        name: 'Pizza',
        price: 159,
        cookTime: '12-15',
        favorite: false,
        origin: ['Indian', 'Italian'],
        star: 5,
        imageUrl: '/assets/pizza.jpg',
        tags: ['Pizza', 'Fastfood', 'Lunch']
      },
      {
        id: 2,
        name: 'Chinese',
        price: 79,
        cookTime: '10-12',
        favorite: true,
        origin: ['Indian', 'Chinese'],
        star: 4.4,
        imageUrl: '/assets/chinese.jpg',
        tags: ['Chinese', 'Fastfood', 'Lunch']
      },
      {
        id: 3,
        name: 'Panipuri',
        price: 69,
        cookTime: '5-7',
        favorite: true,
        origin: ['Indian', 'Gujarati'],
        star: 4.6,
        imageUrl: '/assets/panipuri.jpg',
        tags: ['Panipuri', 'Fastfood', 'Enjoy', 'Gujarati']
      },
      {
        id: 4,
        name: 'Punjabi',
        price: 130,
        cookTime: '12-15',
        favorite: true,
        origin: ['Indian', 'Punjab'],
        star: 3,
        imageUrl: '/assets/punjabi.jpg',
        tags: ['Punjabi', 'Lunch', 'Dinner']
      },
      {
        id: 5,
        name: 'Gujarati',
        price: 150,
        cookTime: '15-20',
        favorite: true,
        origin: ['Indian', 'Gujarat'],
        star: 4.3,
        imageUrl: '/assets/gujarati.jpg',
        tags: ['Gujarati', 'Dinner', 'Lunch']
      },
      {
        id: 6,
        name: 'Idli',
        price: 90,
        cookTime: '10-12',
        favorite: true,
        origin: ['Indian', 'Italian'],
        star: 4.2,
        imageUrl: '/assets/idali.jpg',
        tags: ['Idli', 'Lunch', 'Italian']
      },
      {
        id: 7,
        name: 'Dhosa',
        price: 90,
        cookTime: '10-12',
        favorite: true,
        origin: ['Indian', 'Italian'],
        star: 4.5,
        imageUrl: '/assets/dhosa.jpg',
        tags: ['Dhosa', 'Fastfood', 'Italian']
      },
      {
        id: 8,
        name: 'Dalbati',
        price: 120,
        cookTime: '10-12',
        favorite: true,
        origin: ['Indian', 'Rajasthani'],
        star: 4.5,
        imageUrl: '/assets/dalbati.jpg',
        tags: ['Dalbati', 'Lunch']
      },
    ];
  }
}
