
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit {
  @Input() questionE: string = ''; 
  @Output () reponsefinal = new EventEmitter <string>();
   reponseE : string= '';
  constructor() {}

  ngOnInit(): void {}

  envoiReponse(){
    this.reponsefinal.emit(this.questionE)
  }
}
