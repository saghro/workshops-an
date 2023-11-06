import { Component } from '@angular/core';
import { User } from '../model/user';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  user: User | undefined;

  ngOnInit(): void {
    this.user = new User();
  }
}

