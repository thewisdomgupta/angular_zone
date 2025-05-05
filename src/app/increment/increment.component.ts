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
  showCode: boolean = false;
  copiedSection: string | null = null;

  handleCount(val: string){
    if(val==='plus'){
      this.count = this.count + 1;
    } else if(val==='minus'){
      this.count = this.count - 1;
    } else if(val==='reset'){
      this.count = 0;
    }
  }
  
  copyCode(section: 'html' | 'ts' | 'css'): void {
    let codeToCopy = '';
    if (section === 'html') codeToCopy = this.htmlCode;
    else if (section === 'ts') codeToCopy = this.tsCode;
    else if (section === 'css') codeToCopy = this.cssCode;
  
    navigator.clipboard.writeText(codeToCopy).then(() => {
      this.copiedSection = section;
  
      setTimeout(() => {
        this.copiedSection = null;
      }, 1500);
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  }

  htmlCode: string = `
  <div class="counter_container">
    <h3 class="card_title">Counter Box</h3>
    <h2 class="counter_box">{{ count }}</h2>
    <div class="button_group">
      <button class="plus_btn" (click)="handleCount('plus')">Increment</button>
      <button class="reset_btn" (click)="handleCount('reset')">Reset</button>
      <button class="minus_btn" (click)="handleCount('minus')">Decrement</button>
    </div>
  </div>
  `;
  
    tsCode: string = `
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
  
  .counter_box {
    border-radius: 5px;
    background-color: rgb(246, 9, 191);
    width: 100px;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 40px;
    margin: 0;
  }
  
  .button_group {
    display: flex;
    gap: 15px;
  }
  
  .plus_btn, .minus_btn, .reset_btn {
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
  .minus_btn {
    background-color: #dc3545;
  }
  .reset_btn {
    background-color: #ffc107;
    color: black;
  }
  
  .plus_btn:hover {
    background-color: #218838;
  }
  .minus_btn:hover {
    background-color: #c82333;
  }
  .reset_btn:hover {
    background-color: #e0a800;
  }

  .card_title {
    font-size: 24px;
    font-weight: bold;
    margin: 0;
    color: #333;
    text-align: center;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
  }
  `;
  
    toggleCode() {
      this.showCode = !this.showCode;
    } 
  

}
