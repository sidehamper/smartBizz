import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TransactionService {
  private transactions: any[] = [];

  constructor() {
    const saved = localStorage.getItem('transactions');
    this.transactions = saved ? JSON.parse(saved) : [];
  }

  recordSale(data: any) {
    const tx = {
      id: this.transactions.length + 1,
      ...data,
      date: new Date().toLocaleString()
    };
    this.transactions.push(tx);
    this.save();
  }

  getAllTransactions() {
    return this.transactions;
  }

  private save() {
    localStorage.setItem('transactions', JSON.stringify(this.transactions));
  }
}
