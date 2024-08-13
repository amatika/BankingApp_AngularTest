import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent {
  customerId: string = '';
  amount: number | null = null;
  msg='';

  constructor(private customerService: CustomerService, private router: Router) { }

  withdraw() {
    if (this.amount != null && this.amount > 0) {
      this.customerService.withdraw(this.customerId, this.amount).subscribe(response => {
        alert('Withdrawal successful.' + response.balance);
        this.msg="Withdrawal successful";
        this.router.navigate(['/balance']);
      }, error => {
        console.error('Withdrawal failed', error);
      });
    }
  }
}
