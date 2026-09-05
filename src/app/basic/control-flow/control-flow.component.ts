import { Component } from '@angular/core';
import { MatButtonModule} from '@angular/material/button'
import {MatChip} from '@angular/material/chips'

interface User {
  id: number;
  name: string;
  role: 'Developer' | 'Designer' | 'Tester';
  status: 'Active' | 'Inactive';
}

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [MatButtonModule,MatChip],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.scss'
})
export class ControlFlowComponent {
  showUsers = true;

  selectedRole = 'All';

  directiveNames = '@if, @for, @switch and @empty'

  users : User[] = [
     {
      id: 1,
      name: 'Rahul',
      role: 'Developer',
      status: 'Active'
    },
    {
      id: 2,
      name: 'Priya',
      role: 'Designer',
      status: 'Active'
    },
    {
      id: 3,
      name: 'Arjun',
      role: 'Tester',
      status: 'Inactive'
    },
    {
      id: 4,
      name: 'Sneha',
      role: 'Developer',
      status: 'Active'
    }

  ];

  get FilteredUsers(): User[] {
    if(this.selectedRole === 'All'){
      return this.users
    }

    return this.users.filter(
      user => user.role == this.selectedRole
    );
  }

  toggleUsers(): void {
    this.showUsers = !this.showUsers;
  }

  filterByRole(role:string): void {
   this.selectedRole = role;
  }

}
