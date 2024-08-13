import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { CustomerService } from './services/customer.service';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { BalanceComponent } from './components/balance/balance.component';
import { MiniStatementComponent } from './components/mini-statement/mini-statement.component';
import { DepositComponent } from './components/deposit/deposit.component';
import { WithdrawComponent } from './components/withdraw/withdraw.component';
import { TransferComponent } from './components/transfer/transfer.component';
import { LandingComponent } from './components/landing/landing.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FooterComponent } from './components/footer/footer.component';
import { FilterTransactionIdPipe } from './filter-transaction-id.pipe';


export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    BalanceComponent,
    MiniStatementComponent,
    DepositComponent,
    WithdrawComponent,
    TransferComponent,
    LandingComponent,
    NavbarComponent,
    DashboardComponent,
    FooterComponent,
    FilterTransactionIdPipe
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter,
        allowedDomains: ['localhost:8080/api/customers/balance'],
        disallowedRoutes: ['localhost:8080/api/customers/login',
          'localhost:8080/api/customers/register',
          'localhost:8080/api/customers/balance',
          'localhost:8080/api/customers/withdraw',
          'localhost:8080/api/customers/deposit',
          'localhost:8080/api/customers/transfer',
          'localhost:8080/api/customers/mni-statement'
        ], 
      }
    })
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
