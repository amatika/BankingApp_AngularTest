import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CustomerService } from '../services/customer.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(CustomerService);
  const router = inject(Router);

  if (authService.isAuthenticated()) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};
