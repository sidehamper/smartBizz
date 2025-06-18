import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-view-customers',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.css'],
  standalone:false
})
export class ViewCustomerComponent implements OnInit {
  customers: any[] = [];
  editMap: { [key: number]: boolean } = {};

  constructor(
    private customerService: CustomerService,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    this.customers = this.customerService.getCustomers();
  }

  deleteCustomer(id: number) {
    this.customerService.deleteCustomer(id);
    this.customers = this.customerService.getCustomers();
  }

  updateCustomer(customer: any) {
    this.customerService.updateCustomer(customer);
    this.editMap[customer.id] = false;
  }
}
