import { Injectable }       from '@angular/core';
import { Http }             from '@angular/http';
import { Observable }       from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { FoodItem } from './app.fooditem';

@Injectable()
export class FoodService {
    private dataUrl = './app/foodItems.json';
    constructor(private http: Http) { }

    getFoodItems(): Observable<any> {
        return this.http.get(this.dataUrl)
            .map(response => response.json())
            .catch(this.handleError);
    }

    private handleError(error: any): Observable<any> {
        console.error('An error occurred', error); // for demo purposes only
        return error.message || error;
    }

    getFood(id: number): Observable<FoodItem> {
        return this.getFoodItems()
            .map(foods => foods.data.find((food: FoodItem) => food.id == id));
    }
}