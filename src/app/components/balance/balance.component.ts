import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit {
  balance: number | null = null; 
  customerId: string="";

  constructor(private customerService: CustomerService,private route: ActivatedRoute) { }

  ngOnInit(): void {
   /* this.route.queryParams.subscribe(params =>
    {
      this.customerId = params['customerId'];
      this.getBalance();
      console.log('Customer ID:', this.customerId);
    });*/
  }
  getBalance(): void {
    if (this.customerId) {
      this.customerService.getBalance(this.customerId).subscribe(response => {
        this.balance = response.balance;
      }, error => {
        localStorage.getItem('token');
        console.error('Failed to get balance', error);
      });
    }
  }
}
