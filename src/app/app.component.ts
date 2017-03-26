import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template:   
      `<nav class="site-nav">
         <a routerLink="/home" routerLinkActive="active">Home</a>
         <a routerLink="/about" routerLinkActive="active">About</a>
       </nav>
       <!-- Where router should display a view -->
       <router-outlet></router-outlet>`,
    styleUrls: ['app/app.component.css']
})
export class AppComponent {}
