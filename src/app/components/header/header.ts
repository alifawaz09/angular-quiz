import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  constructor(private router: Router) {}

  onSearch(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    const id = Number(value);
    if (!isNaN(id) && id > 0) {
      this.router.navigate(['/user', id]);
    }
  }
}

