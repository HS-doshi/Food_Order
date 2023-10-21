import { Component } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { OnInit } from '@angular/core'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  foods: string[] = [];
  constructor(private fs: FoodService) { }


  ngOnInit(): void {
    this.foods = this.fs.getAll(); //add food property
  }

}
