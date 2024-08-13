import { Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
  services = [
    {
      title: 'Online Banking',
      description: 'Manage your finances from anywhere, anytime.',
      imageUrl: 'assets/images/onbanking.jpg'
    },
    {
      title: 'Savings Accounts',
      description: 'Secure and grow your savings with our accounts.',
      imageUrl: 'assets/images/savings.png'
    },
    {
      title: 'Loans',
      description: 'Flexible loan options tailored to your needs.',
      imageUrl: 'assets/images/loans.jpg'
    },
    {
      title: 'Customer Support',
      description: 'Get help and support whenever you need it.',
      imageUrl: 'assets/images/support.jpg'
    }
  ];
}