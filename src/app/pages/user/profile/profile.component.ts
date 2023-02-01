import { IUserDetail } from './../../../core/interfaces/user-detail.interface';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  @Input() userDetail!: IUserDetail;

  constructor() {}

  ngOnInit(): void {}
}
