import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent {
  fromCustomerId: string = '';
  toAccountNumber: string = '';
  amount: number | null = null;
  msg='';

  constructor(private customerService: CustomerService, private router: Router) { }

  transfer() {
    if (this.amount != null && this.amount > 0) {
      this.customerService.transfer(this.fromCustomerId, this.toAccountNumber, this.amount).subscribe(response => {
        alert('Transfer successful. Current balance: ' + response.balance);
        this.router.navigate(['/balance']);
      }, error => {
        console.error('Transfer failed', error);
      });
    }
  }
}
