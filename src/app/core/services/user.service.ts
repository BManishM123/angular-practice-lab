import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users = [
    {
      id: 1,
      name: 'Rohan Mohanty',
      role: 'Developer Cybersceurity',
      status: 'Active'
    },
    {
      id: 2,
      name: 'Lalit Sai',
      role: 'Digital Marketting',
      status: 'Inactive'
    },
    {
      id: 3,
      name: 'Manish',
      role: 'Developer',
      status: 'Active'
    }
  ];

  getUsers() {
    return this.users;
  }

}