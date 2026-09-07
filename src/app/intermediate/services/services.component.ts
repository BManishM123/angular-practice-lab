import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [MatIconModule,MatButtonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {

  private userService = inject(UserService);

  users = this.userService.getUsers();

  refreshUser(): void {
    this.users = this.userService.getUsers();
  }

}
