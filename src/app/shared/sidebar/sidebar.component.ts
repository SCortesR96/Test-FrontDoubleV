import { IMenuRepositories } from './../../core/interfaces/menu-item.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  @Input() repositories: Array<IMenuRepositories> = [];

  constructor() {}

  ngOnInit(): void {}
}
