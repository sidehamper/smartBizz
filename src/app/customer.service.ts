import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CustomerService {
  private customers: any[] = [];

  constructor() {
    const saved = localStorage.getItem('customers');
    this.customers = saved ? JSON.parse(saved) : [];
  }

  getCustomers() {
    return this.customers;
  }

  addCustomer(cust: any) {
    cust.id = this.customers.length + 1;
    this.customers.push(cust);
    this.save();
  }

  private save() {
    localStorage.setItem('customers', JSON.stringify(this.customers));
  }

  deleteCustomer(id: number) {
  this.customers = this.customers.filter(c => c.id !== id);
  this.save();
  }

  updateCustomer(updated: any) {
  const index = this.customers.findIndex(c => c.id === updated.id);
  if (index !== -1) {
    this.customers[index] = updated;
    this.save();
  }
  }

}
