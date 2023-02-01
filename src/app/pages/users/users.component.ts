import { UserService } from 'src/app/core/services/user.service';
import { IUser } from 'src/app/core/interfaces/user.interface';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: Array<IUser> = [];

  constructor(private _user: UserService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    return this._user.getUsers().subscribe((data) => {
      this.users = data.items;
    });
  }
}
