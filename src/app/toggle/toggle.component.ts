import { Component } from '@angular/core';
import { ShowCodeComponent } from '../shared/show-code/show-code.component';

@Component({
  selector: 'app-toggle',
  imports: [ShowCodeComponent],
  templateUrl: './toggle.component.html',
  styleUrl: './toggle.component.css'
})
export class ToggleComponent {
  toogleBox: boolean = true;
  showCode: boolean = false;

  handleToggle() {
    this.toogleBox = !this.toogleBox;
  }

  toggleCode() {
    this.showCode = !this.showCode;
  }

  htmlCode: string = `
  <div class="counter_container">
    <h3 class="card_title">Toggle Box</h3>
    @if(toogleBox){
    <div class="circle_box"></div>
    }
    <div class="button_group">
        <button class="plus_btn" (click)=" handleToggle()">Show</button>
    </div>
</div>
  `;

  tsCode: string = `
  export class ToggleComponent {
  toogleBox: boolean = true;
  handleToggle(){
    this.toogleBox = !this.toogleBox;
  }
 }
  `;

  cssCode: string = `
  .counter_container {
    background-color: #ffffff;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    padding: 30px;
    width: 700px;
    margin: 40px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }

   .card_title {
    font-size: 24px;
    font-weight: bold;
    margin: 0;
    color: #333;
    text-align: center;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
  }

  .circle_box {
    width: 180px;
    height: 180px;
    background: radial-gradient(circle at top left, #ff6ec4, #7873f5);
    border-radius: 50%;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    font-weight: bold;
    color: white;
    transition: opacity 0.3s ease, transform 0.3s ease;
  }
  
  .button_group {
    display: flex;
    gap: 15px;
  }
  
  .plus_btn {
    width: 120px;
    padding: 15px;
    border: none;
    border-radius: 6px;
    color: white;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .plus_btn {
    background-color: #28a745;
  }
  
  .plus_btn:hover {
    background-color: #218838;
  }
  `;
}
