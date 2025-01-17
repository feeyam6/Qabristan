import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  constructor(private apiService: ApiService) {}
  getUserId() {
    this.apiService.getUserId().subscribe({
      next: (res) => console.log(res),
      error: (err) => console.log(err),
    });
  }
}
