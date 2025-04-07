import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

export const normalGuard: CanActivateFn = (route, state) => {
  const loginService = inject(LoginService);
  const router = inject(Router);

  // Allow access only if logged in and role is ADMIN
  if (loginService.isLogin() && loginService.getUserRole() === 'NORMAL') {
    return true;
  }

  // Redirect to login page
  router.navigate(['/login']);
  return false;
};
