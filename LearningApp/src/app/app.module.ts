import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { HeroesComponent } from './heroes/heroes.component';
import { FormsModule } from '@angular/forms';
import { ChecklistComponent } from './checklist/checklist.component';
import { YoutubeBookComponent } from './youtube-book/youtube-book.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    ChecklistComponent,
    YoutubeBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
