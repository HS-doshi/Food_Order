import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id: number): Foods {
    return this.getAll().find(food => food.id == id)!;
  }

  getAllFoodByTag(tag: string): Foods[] {

    return tag === "All" ?
      this.getAll() : this.getAll().filter(food => food.tags?.includes(tag))

    // we can write this statement is very simple type let's do it.
  }

  getAllTag(): Tag[] {
    return [
      { name: 'All', count: 8 },
      { name: 'Lunch', count: 6 },
      { name: 'FastFood', count: 3 },
      { name: 'Dinner', count: 3 },
      { name: 'Gujarati', count: 2 },
      { name: 'Italian', count: 2 },
      { name: 'Punjabi', count: 1 },
      { name: 'Chinese', count: 1 },
      { name: 'Rajasthani', count: 1 },
    ];
  }

  getAll(): Foods[] {
    return [
      {
        id: 1,
        name: 'Pizza',
        price: 159,
        cookTime: '12-15',
        favorite: true,
        origin: ['Italian'],
        star: 4.7,
        imageUrl: '/assets/pizza.jpg',
        tags: ['Pizza', 'FastFood', 'Lunch', 'Dinner']
      },
      {
        id: 2,
        name: 'Chinese',
        price: 79,
        cookTime: '10-12',
        favorite: true,
        origin: ['Chinese'],
        star: 4.4,
        imageUrl: '/assets/chinese.jpg',
        tags: ['Chinese', 'FastFood', 'Lunch',]
      },
      {
        id: 3,
        name: 'Panipuri',
        price: 59,
        cookTime: '5-7',
        favorite: true,
        origin: ['Indian', 'Gujarati'],
        star: 5,
        imageUrl: '/assets/panipuri.jpg',
        tags: ['Panipuri', 'FastFood', 'Enjoy', 'Gujarati', 'Indian']
      },
      {
        id: 4,
        name: 'Punjabi',
        price: 130,
        cookTime: '12-15',
        favorite: true,
        origin: ['Indian', 'Punjabi'],
        star: 4,
        imageUrl: '/assets/punjabi.jpg',
        tags: ['Punjabi', 'Lunch', 'Dinner']
      },
      {
        id: 5,
        name: 'Gujarati Thali',
        price: 150,
        cookTime: '15-17',
        favorite: true,
        origin: ['Indian', 'Gujarat'],
        star: 4.6,
        imageUrl: '/assets/gujarati.jpg',
        tags: ['Gujarati', 'Dinner', 'Lunch', 'Indian']
      },
      {
        id: 6,
        name: 'Idli',
        price: 90,
        cookTime: '10-12',
        favorite: true,
        origin: ['Italian'],
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
        origin: ['Italian'],
        star: 3.7,
        imageUrl: '/assets/dhosa.jpg',
        tags: ['Dhosa', 'Italian']
      },
      {
        id: 8,
        name: 'Dalbati',
        price: 120,
        cookTime: '10-12',
        favorite: true,
        origin: ['Indian', 'Rajasthani'],
        star: 3.8,
        imageUrl: '/assets/dalbati.jpg',
        tags: ['Dalbati', 'Lunch', 'Rajasthani', 'Indian']
      },
    ];
  }
}
