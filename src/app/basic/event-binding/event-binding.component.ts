import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  standalone: true,
  imports: [],
  templateUrl: './event-binding.component.html',
  styleUrl: './event-binding.component.scss'
})
export class EventBindingComponent {
 message = 'Click the button';

  count = 0;

  handleClick(): void {

    this.count++;

    this.message = `Button clicked ${this.count} times`;

  }
}
