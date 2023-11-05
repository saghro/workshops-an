import { Component } from '@angular/core';

@Component({
  selector: 'app-nom-liste',
  templateUrl: './nom-liste.component.html',
  styleUrls: ['./nom-liste.component.css']
})
export class NomListeComponent {
  noms = ['Alice', 'Bob', 'Charlie', 'David'];
}
