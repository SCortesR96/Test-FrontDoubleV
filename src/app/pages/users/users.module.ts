import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UsersRoutingModule } from './users-routing.module';
import { ListUserComponent } from './list-user/list-user.component';

@NgModule({
  declarations: [UsersComponent, ListUserComponent],
  imports: [CommonModule, UsersRoutingModule],
})
export class UsersModule {}
