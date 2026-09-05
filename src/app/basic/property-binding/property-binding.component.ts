import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  standalone: true,
  imports: [],
  templateUrl: './property-binding.component.html',
  styleUrl: './property-binding.component.scss'
})
export class PropertyBindingComponent {
imageUrl =
    'https://angular.dev/assets/images/press-kit/angular_icon_gradient.gif';

  isDisabled = true;

}
