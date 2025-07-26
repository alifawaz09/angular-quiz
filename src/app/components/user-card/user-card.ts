import { Component, Input } from '@angular/core';
import { User } from '../../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-card',
  standalone: false,
  templateUrl: './user-card.html',
  styleUrl: './user-card.scss'
})
export class UserCard {
   @Input() user!: User;

  constructor(private router: Router) {}

  goToDetails(): void {
    this.router.navigate(['/user', this.user.id]);
  }
}