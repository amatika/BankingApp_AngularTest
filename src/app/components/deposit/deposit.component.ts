import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent {
  customerId: string = '';
  amount: number | null = null;
  msg='';

  constructor(private customerService: CustomerService, private router: Router) { }

  deposit() {
    if (this.amount != null && this.amount > 0) {
      this.customerService.deposit(this.customerId, this.amount).subscribe(response => {
        alert('Deposit successful. Account Balance is:'+response.balance);
        this.msg="Funds deposited succesfully";
        this.router.navigate(['/balance']);
      }, error => {
        console.error('Deposit failed', error);
      });
    }
  }
}
