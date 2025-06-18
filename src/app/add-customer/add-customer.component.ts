import { Component } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css'],
  standalone:false
})
export class AddCustomerComponent {
  name = '';
  mobile = '';
  address = '';
  success = '';

  constructor(private customerService: CustomerService) {}

  addCustomer() {
    if (this.name && this.mobile && this.address) {
      this.customerService.addCustomer({ name: this.name, mobile: this.mobile, address: this.address });
      this.success = 'Customer added successfully!';
      this.name = this.mobile = this.address = '';
    }
  }
}