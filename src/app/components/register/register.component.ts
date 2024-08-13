import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  name: string = '';
  email: string = '';
  customerId: string = '';

  constructor(private customerService: CustomerService, private router: Router) { }

  register() {
    const customerData = { name: this.name, email: this.email, customerId: this.customerId };
    this.customerService.registerCustomer(customerData).subscribe(response => {
      this.router.navigate(['/login']);      
    }, error => {
      console.error('Registration failed', error);
    });
  }
}
