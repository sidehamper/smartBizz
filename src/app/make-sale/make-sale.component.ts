import { Component } from '@angular/core';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-make-sale',
  templateUrl: './make-sale.component.html',
  styleUrls: ['./make-sale.component.css'],
  standalone:false
})
export class MakeSaleComponent {
  customer = '';
  amount: number | null = null;
  message = '';

  constructor(private transactionService: TransactionService) {}

  makeSale() {
    if (this.customer && this.amount) {
      this.transactionService.recordSale({ customer: this.customer, amount: this.amount });
      this.message = 'Sale recorded successfully!';
      this.customer = '';
      this.amount = null;
    }
  }
}