import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private apiUrl = 'http://localhost:8080/api/customers'; 

  constructor(private http: HttpClient, public jwtHelper: JwtHelperService) { }

  registerCustomer(customerData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, customerData);
  }

  login(customerId: string, pin: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { customerId, pin });
  }

  getBalance(customerId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/balance`, {
      headers: this.getAuthHeaders(),
      params: { customerId }
    });
  }

  getMiniStatement(customerId: string): Observable<any> {
    return this.http.get<any[]>(`${this.apiUrl}/mini-statement`, {
      headers: this.getAuthHeaders(),
      params: { customerId }
    });
  }
  
  deposit(customerId: string, amount: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/deposit`, null, {
      headers: this.getAuthHeaders(),
      params: { customerId, amount: amount.toString() }
    });
  }

  withdraw(customerId: string, amount: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/withdraw`, null, {
      headers: this.getAuthHeaders(),
      params: { customerId, amount: amount.toString() }
    });
  }

  transfer(fromCustomerId: string, toAccountNumber: string, amount: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/transfer`, null, {
      headers: this.getAuthHeaders(),
      params: { fromCustomerId, toAccountNumber, amount: amount.toString() }
    });
  }

 /* private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }*/

    private getAuthHeaders(): HttpHeaders {
      const token = localStorage.getItem('token'); 
      if (token) {
        return new HttpHeaders().set('Authorization', `Bearer ${token}`);
      } else {
        throw new Error('No token found');
      }
    }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }
}
