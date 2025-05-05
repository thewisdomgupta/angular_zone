import { Component } from '@angular/core';
import { IncrementComponent } from './increment/increment.component';

@Component({
  selector: 'app-root',
  imports: [IncrementComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my_app';
}
