import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../models/user/user';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<User[]> {
    return this.http.get('api/users').pipe(
      map(res => res as User[]),
      map((users: User[]) => users.map(u => this.getFullName(u)))
    );
  }
  private getFullName(user: User) {
    user.fullName = user.firstName + ' ' + user.lastName;
    return user;
  }
  getById(id: number): Observable<User> {
    return this.http.get(`api/users/?id=${id}`).pipe(
      map(res => res as User),
      map((user: User) => this.getFullName(user))
    );
  }
}
