import { Component, OnInit } from '@angular/core';
import { Foods } from '../shared/models/food';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent implements OnInit {

  food!: Foods;

  constructor(private activatedRoute: ActivatedRoute,
    private foodService: FoodService) {
    activatedRoute.params.subscribe((params) => {
      if (params['id'])
        this.food = foodService.getFoodById(params['id'])
    })
  }

  foods: Foods[] = [];
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

  }
}


