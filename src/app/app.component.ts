import { Component } from '@angular/core';
import { IncrementComponent } from './increment/increment.component';
import { FormComponent } from './form/form.component';

@Component({
  selector: 'app-root',
  imports: [IncrementComponent, FormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my_app';
}
