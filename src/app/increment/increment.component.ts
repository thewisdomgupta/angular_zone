import { Component } from '@angular/core';

@Component({
  selector: 'app-increment',
  imports: [],
  templateUrl: './increment.component.html',
  styleUrl: './increment.component.css',
  preserveWhitespaces: true
})
export class IncrementComponent {
  count: number = 0;

  handleCount(val: string){
    if(val==='plus'){
      this.count = this.count + 1;
    } else if(val==='minus'){
      this.count = this.count - 1;
    } else if(val==='reset'){
      this.count = 0;
    }
  }

}
