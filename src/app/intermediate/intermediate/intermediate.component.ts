import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-intermediate',
  standalone: true,
  imports: [RouterOutlet,
     RouterLink,
        RouterLinkActive,
  ],
  templateUrl: './intermediate.component.html',
  styleUrl: './intermediate.component.scss'
})
export class IntermediateComponent {

}
