import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isActivate = true;
  isHovered = false;
  showDescription = false;
  descriptionText = "votre ducuments sont enregistrer";
  
  toggleDescription() {
    this.showDescription = !this.showDescription;
  }
}

