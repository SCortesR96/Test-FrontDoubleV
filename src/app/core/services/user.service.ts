import { IUserDetail } from './../interfaces/user-detail.interface';
import { IUserRepository } from './../interfaces/UserRepository.interface';
import { IDoubleV } from 'src/app/core/interfaces/doublev.interface';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<IDoubleV>(
      `${environment.doubleVEndpoint}/search/users?q=YOUR_NAME`
    );
  }

  getUserDetail(user: string) {
    return this.http.get<IUserDetail>(
      `${environment.doubleVEndpoint}/users/${user}`
    );
  }

  getUserRepositories(user: string) {
    return this.http.get<Array<IUserRepository>>(
      `${environment.doubleVEndpoint}/users/${user}/repos`
    );
  }
}
