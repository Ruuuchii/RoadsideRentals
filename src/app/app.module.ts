import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { PropertyCardComponent } from './property/property-card/property-card.components';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
   declarations: [
      AppComponent,
      PropertyCardComponent,
      PropertyListComponent,
      NavBarComponent
   ],
   imports: [
	 BrowserModule,
   HttpClientModule
	],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }

