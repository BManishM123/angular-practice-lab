import { Component, inject } from '@angular/core';
import { User, UserApiService } from '../../core/services/user-api.service';
import { BehaviorSubject, catchError, combineLatest, debounceTime, distinctUntilChanged, forkJoin, map, Observable, of, retry, shareReplay, Subject, switchMap, tap } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-rxjs',
  standalone: true,
  imports: [FormsModule,AsyncPipe,JsonPipe],
  templateUrl: './rxjs.component.html',
  styleUrl: './rxjs.component.scss'
})
export class RxjsComponent {
  private userApi = inject(UserApiService);

  // Subject

  private searchSubject = new Subject<string>();

  // BehaviorSubject

  private selectedRoleSubject = new BehaviorSubject<string>('All');

  searchTerm = '';

  selectedRole = 'All';

  roles = [
    'All',
    'Frontend Developer',
    'Angular Developer',
    'Ui Developer',
    'React Developer'
  ];

  requestCount = 0;

  /*
   * Search stream
   *
   * debounceTime
   * distinctUntilChanged
   * switchMap
   */

  searchResults$ : Observable<User[]> = 
  this.searchSubject.pipe(
    debounceTime(400),

    distinctUntilChanged(),
    tap(() => {

    this.requestCount ++;

   }),

   switchMap(search =>
    this.userApi.getUsers().pipe(
      retry(2),
      map(users => {
        if(!search.trim()) {
          return users;
        }

        const term = search.toLowerCase();

        return users.filter( user => 
          user.name.toLowerCase().includes(term) ||
          user.email.toLowerCase().includes(term) ||
          user.role.toLowerCase().includes(term)
        );
      }),

      catchError( error =>{
        console.error(error);
        return of([])
})
    )
   ),
   shareReplay({
    bufferSize: 1,
    refCount: true
   })
  );

    /*
   * BehaviorSubject + combineLatest
   */

   filteredUsers$: Observable<User[]> =
   combineLatest([
    this.userApi.getUsers(),
    this.selectedRoleSubject
   ]).pipe(
    map(([users,role]) => {
      if(role === 'All'){
        return users;
      }

      return users.filter(
        users => users.role === role
      );
}),

shareReplay({
  bufferSize: 1,
  refCount: true
})
   );

   onSearch(): void {
    this.searchSubject.next(
      this.searchTerm
    );
   }

   changeRole(role: string): void {
    this.selectedRole = role;

    this.selectedRoleSubject.next (
      role
    );
   }

   loadMultipleRequests(): void {
    forkJoin({
      users: this.userApi.getUsers(),
      user1: this.userApi.getUser('1'),
      user2: this.userApi.getUser('2')

    }).subscribe(result => {
      console.log(
        'forkJoin Results:',
        result
      );

      alert (
        'Multiple API requests completed. check Console'
      );
     
    });

   }



}
