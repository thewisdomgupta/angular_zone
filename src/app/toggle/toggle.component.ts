import { Component } from '@angular/core';

@Component({
  selector: 'app-toggle',
  imports: [],
  templateUrl: './toggle.component.html',
  styleUrl: './toggle.component.css'
})
export class ToggleComponent {
  toogleBox: boolean = true;

  handleToggle(){
    this.toogleBox = !this.toogleBox;
  }
}
