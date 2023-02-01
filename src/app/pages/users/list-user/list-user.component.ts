import { IUser } from './../../../core/interfaces/user.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css'],
})
export class ListUserComponent implements OnInit {
  @Input() user!: IUser;

  constructor() {}

  ngOnInit(): void {}
}
