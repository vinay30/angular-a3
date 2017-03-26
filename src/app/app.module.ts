import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { routing } from './app.routing';

import { AppComponent }   from './app.component';
import { FoodListComponent } from "./app.foodlistcomponent";
import { DetailsComponent } from './app.detailscomponent';
import { AboutComponent } from './app.aboutcomponent';

import { FoodService } from "./app.food.service";

@NgModule({
    imports:      [ BrowserModule, routing, HttpModule ],
    declarations: [ AppComponent, FoodListComponent, DetailsComponent, AboutComponent ],
    bootstrap:    [ AppComponent ],
    providers:    [ FoodService ]
})
export class AppModule { }
