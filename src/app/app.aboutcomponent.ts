import { Component } from '@angular/core';

@Component({
    templateUrl:'./app/about.html',
    styleUrls: ['app/app.aboutcomponent.css']
})
export class AboutComponent {

    title = "About Page";
    assignment = "Angular 2909 Assignment 3";
    student = "Vinay Punwani";
    date = new Date();

}
