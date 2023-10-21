import { Component } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { OnInit } from '@angular/core'
import { Foods } from '../shared/models/food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  foods: Foods[] = [];
  constructor(private fs: FoodService) { }

  isFavoriteColor(food: Foods): string {
    return food.favorite ? 'pink-heart' : 'default-heart';
  }

  calculateStarClass(rating: number, starNumber: number): string {
    if (starNumber <= rating) {
      return 'checked';
    } else if (starNumber - rating < 0.5) {
      return 'half-checked';
    } else {
      return '';
    }
  }

  ngOnInit(): void {
    this.foods = this.fs.getAll();
  }
}
