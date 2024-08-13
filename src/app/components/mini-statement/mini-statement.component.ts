interface Customer {
  id: number;
  customerId: string;
  name: string;
  email: string;
  pin: string;
  account: string;
}

interface Account {
  id: number;
  accountNumber: string;
  balance: number;
  customer: Customer;
}

interface Transaction {
  id: number;
  transactionId: string;
  type: string;
  amount: number;
  description: string;
  timestamp: string;
  account: Account;
}

import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-mini-statement',
  templateUrl: './mini-statement.component.html',
  styleUrls: ['./mini-statement.component.css']
})
export class MiniStatementComponent implements OnInit {
  customerId: string = '';
  transactions: any[] = [];
  searchText: string = '';

  constructor(private customerService: CustomerService) {}

  ngOnInit(): void {
    this.loadTransactions();
  }

  loadTransactions(): void {
    this.customerService.getMiniStatement(this.customerId).subscribe(
      (data) => {
        this.transactions = data;
      },
      (error) => {
        console.error('Error loading transactions', error);
      }
    );
  }
}