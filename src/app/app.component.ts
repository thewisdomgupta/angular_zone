import { Component } from '@angular/core';
import { IncrementComponent } from './increment/increment.component';
import { ToggleComponent } from './toggle/toggle.component';

@Component({
  selector: 'app-root',
  imports: [IncrementComponent, ToggleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my_app';
}
