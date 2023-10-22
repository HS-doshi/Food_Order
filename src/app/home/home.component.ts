import { Component } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { OnInit } from '@angular/core'
import { Foods } from '../shared/models/food';
import { ActivatedRoute } from '@angular/router';
import { Tag } from '../shared/models/Tag';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  tags: string[] = []; // Change the type to string[]
  foods: Foods[] = [];

  constructor(private fs: FoodService, private route: ActivatedRoute) { }

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
    this.route.params.subscribe(params => {
      if (params['searchItem'])
        this.foods = this.fs.getAll().filter(food => food.name.toLowerCase().includes(params['searchItem'].toLowerCase()));
      else if (params['tag'])
        this.foods = this.fs.getAllFoodByTag(params['tag']);
      else
        this.foods = this.fs.getAll();

      // Populate tags from the list of foods
      this.tags = this.fs.getAllTag().map(tag => tag.name);
    });
  }
}
