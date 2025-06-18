import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
  standalone:false
})
export class AdminDashboardComponent {
  constructor(public authService: AuthService) {}

  logout() {
    this.authService.logout();
  }
}