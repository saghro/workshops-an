import { Component ,OnInit } from '@angular/core';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit {
    questionE : string='';  
    constructor(){}
    ngOnInit(): void {
        
    }
}
