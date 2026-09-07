import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { NotificationService } from '../../../core/services/notification.service';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.scss'
})
export class NotificationComponent {

  private notificationService = inject(NotificationService)

  notify(message: string): void {
    this.notificationService.show(message);
  }

}
