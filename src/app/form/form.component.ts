import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  imports: [],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
  preserveWhitespaces: true
})
export class FormComponent {
  name = "";

  setData(){
    this.name = 'John Doe';
  }

  getData(event: Event){
    this.name= (event.target as HTMLInputElement).value;
  }

}
