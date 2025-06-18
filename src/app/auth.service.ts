import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private users = [
    { username: 'admin', password: 'admin123', role: 'admin' },
    { username: 'ravi', password: 'ravi123', role: 'employee' },
    { username: 'sita', password: 'sita123', role: 'employee' }
  ];

  currentUser: any = null;

  constructor(private router: Router) {}

  login(username: string, password: string): boolean {
    const user = this.users.find(
      u => u.username === username && u.password === password
    );
    if (user) {
      this.currentUser = user;
      this.router.navigate([user.role]);
      return true;
    }
    return false;
  }

  logout() {
    this.currentUser = null;
    this.router.navigate(['/']);
  }

  isAuthenticated(): boolean {
    return this.currentUser !== null;
  }

  getRole(): string {
    return this.currentUser?.role;
  }
}