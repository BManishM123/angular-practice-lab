import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { User, UserApiService } from '../../core/services/user-api.service';
import { AuthService } from '../../core/services/auth.service';
import { BehaviorSubject, firstValueFrom, Observable } from 'rxjs';
import { error } from 'console';

@Component({
  selector: 'app-integration-lab',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './integration-lab.component.html',
  styleUrl: './integration-lab.component.scss'
})
export class IntegrationLabComponent implements OnInit {

  private userApi = inject(UserApiService);
  private authService = inject(AuthService);
  private router = inject(Router);

  //Observable
  users$!:Observable<User[]>;

  //BehaviourService
  selectedUserSubject = new BehaviorSubject<User | null>(null);
  
  selectedUser$ = this.selectedUserSubject.asObservable();

  users: User[] = [];

  searchTerm = '';
  loading = false;
  errorMessage = '';
  requestStatus = 'Ready';

  isLoggedIn$ = this.authService.isLoggedIn$;

  ngOnInit(): void {
    this.loadUsers();
  }

  //Observable + async pipe
  loadUsers(): void {
    this.loading = true;
    this.errorMessage = '';

    this.users$ = this.userApi.getUsers();

    this.users$.subscribe({
      next: users => {
        this.users = users;
        this.loading = false;
        this.requestStatus = `${users.length} users Loaded`;
        console.log(users);
      },

      error: error =>{
        console.error(error);
        this.loading = false;
        this.errorMessage = `Unable to load Users. Is JSON Server Running?`;

        this.requestStatus = 'API Error';
      }
    });
  }


  // Async / Await

  async loadUserUsingAsyncAwait(id : string): Promise<void> {
    try {
      this.requestStatus = `Loading selected user ....`;

      const user = await firstValueFrom (
        this.userApi.getUser(id)
      );

      this.selectedUserSubject.next(user);
      this.requestStatus = `Loaded ${user.name}`;
    } catch (error){
      console.error(error);

      this.errorMessage = 'Unable to load user';
    }
  }

  async deleteUser(id: string): Promise<void> {
    const confirmed = confirm('Are you sure you want to delete this User?');

    if (!confirmed) {
      return;
    }

    try {
      this.requestStatus = 'Deleting user .....';

      await firstValueFrom(this.userApi.deleteUser(id));

      this.requestStatus = 'User Deleted Sucessfully';
      this.loadUsers();
    } catch (error) {
      console.error(error);

      this.errorMessage = 'Delete Operation failed';
    }
  }

  login(): void {
    this.authService.login();
  }

  logout(): void {
    this.authService.logOut();
  }

  toggleLogin(isLoggedIn: boolean): void {
    if(isLoggedIn) {
      this.login();
    } else {
      this.logout();
    }
  }

  openProtectedRoute(): void {
    this.router.navigate([
      '/advanced/protected'
    ]);
  }

  get filteredUsers(): User[] {
    if (!this.searchTerm.trim()){
      return this.users;
    }

    const search = this.searchTerm.toLowerCase();

    return this.users.filter( user => 
      user.name.toLowerCase().includes(search) ||
      user.role.toLowerCase().includes(search) ||
      user.email.toLowerCase().includes(search)
    );
  }


}
