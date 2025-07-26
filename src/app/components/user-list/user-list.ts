import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { UserApiResponse } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-list',
  standalone: false,
  templateUrl: './user-list.html',
  styleUrl: './user-list.scss'
})
export class UserList implements OnInit {
  apiResponse: UserApiResponse | null = null;
  loading = false;

  constructor(
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.loadUsers(1);
  }

 loadUsers(page: number) {
  this.loading = true;
  this.userService.getUsers(page).subscribe({
    next: (res: UserApiResponse) => {
      this.apiResponse = res;
      this.loading = false;
    },
    error: err => {
      console.error(err);
      this.loading = false;
    }
  });
  }

  onPageChange(newPage: number): void {
    this.loadUsers(newPage);
  }
}