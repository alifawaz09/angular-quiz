import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user-detail',
  standalone: false,
  templateUrl: './user-detail.html',
  styleUrl: './user-detail.scss'
})
export class UserDetail implements OnInit {
user!: User;
  loading = true;
  error = false;

  constructor( 
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
  
  ) {}

    ngOnInit(): void {
      this.route.params.subscribe(params => {
        const id = Number(params['id']);
        this.fetchUser(id);
      });
  }

  fetchUser(id: number): void {
    this.loading = true;
    this.error = false;

    if (!id || isNaN(id)) {
      this.error = true;
      this.loading = false;
      return;
    }

    this.userService.getUserById(id).subscribe({
      next: res => {
        this.user = res.data;
        this.loading = false;
      },
      error: () => {
        this.error = true;
        this.loading = false;
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/']);
  }
}
