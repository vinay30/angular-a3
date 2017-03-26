import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }   from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { FoodService }              from './app.food.service';
import { FoodItem }                 from "./app.fooditem";

@Component({
    templateUrl: '/app/detail.html',
    styleUrls: ['app/app.detailscomponent.css']
})
export class DetailsComponent implements OnInit {

    public food: FoodItem;
    
    constructor(
        private foodService: FoodService,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.route.params
            .switchMap(params => this.foodService.getFood(+params['id']))
            .subscribe(food => this.food = food);
    }
}