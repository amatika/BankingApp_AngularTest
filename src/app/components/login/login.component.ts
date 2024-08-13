import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  customerId: string = 'shawn123';
  pin: string = '1672';

  constructor(private customerService: CustomerService, private router: Router) { }

  login() 
  {
    this.customerService.login(this.customerId, this.pin).subscribe(response => {
      localStorage.setItem('token', response.token);
      this.router.navigate(['/balance'], { queryParams: { customerId: this.customerId } }); 
    }, error => {
      console.error('Login failed', error);
    });
  }
}
