import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FoodItem }  from './app.fooditem';
import { FoodService } from './app.food.service';

@Component({
    templateUrl: '/app/home.html',
    styleUrls: ['app/app.foodlistcomponent.css']
})
export class FoodListComponent implements OnInit {
    foods: FoodItem[];
    vendor: String;

    constructor(
        private foodService: FoodService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.getFoodItems();
    }

    getFoodItems(): void {
        this.foodService.getFoodItems()
            .subscribe(foodInfo => {
                this.foods = foodInfo.data; //pulling out data object which contains food list
                this.vendor = foodInfo.vendor; //pulling out vendor meta data
            });
    }

    onSelect(food: FoodItem) {
        this.router.navigate(['/detail', food.id]);
    }
}
