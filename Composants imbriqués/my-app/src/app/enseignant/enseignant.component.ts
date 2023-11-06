import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enseignant',
  templateUrl: './enseignant.component.html',
  styleUrls: ['./enseignant.component.css']
})
export class EnseignantComponent implements OnInit {
     question : string = '';
     reponse : string = '';
     messge : string = '';
     constructor(){}
     ngOnInit(): void {
         this.question='quel est le language de programmation utilise pour dev un application angular';
         this.reponse = 'typescript';
     }
     correction(reponseE : string){
      if(this.reponse === reponseE){
        this.messge = 'Bravo'
      }
      else{
        this.messge = 'Echec'
      }
         
     }
}
