import { IUserDetail } from './../../core/interfaces/user-detail.interface';
import { IMenuRepositories } from './../../core/interfaces/menu-item.interface';
import { UserService } from 'src/app/core/services/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  private username!: string;
  public repositories: Array<IMenuRepositories> = [];
  public userDetail!: IUserDetail;

  constructor(private _user: UserService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      this.username = param['login'];
      this.getUserDetail();
      this.getUserRepositories();
    });
  }

  getUserDetail() {
    return this._user.getUserDetail(this.username).subscribe((userDetail) => {
      this.userDetail = userDetail;
    });
  }

  getUserRepositories() {
    return this._user
      .getUserRepositories(this.username)
      .subscribe((repositories) => {
        repositories.map((repository) => {
          this.repositories.push({
            name: repository.name,
            language: repository.language,
            url: repository.url,
            visibility: repository.visibility,
            created_at: repository.created_at,
            updated_at: repository.updated_at,
          });
        });
      });
  }
}
