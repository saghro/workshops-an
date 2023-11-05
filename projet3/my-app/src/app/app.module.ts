import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NomListeComponent } from './nom-liste/nom-liste.component';
import { SummaryComponent } from './summary/summary.component'; // Ajoutez le composant SummaryComponent

@NgModule({
  declarations: [
    AppComponent,
    NomListeComponent,
    SummaryComponent, // Ajoutez le composant SummaryComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

