import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css'],
  standalone:false
})
export class EmployeeDashboardComponent {
  constructor(public authService: AuthService) {}

  logout() {
    this.authService.logout();
  }
}