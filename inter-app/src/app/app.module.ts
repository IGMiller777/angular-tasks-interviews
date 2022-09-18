import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IncomeComponent } from './tabs/income/income.component';
import { OutcomeComponent } from './tabs/outcome/outcome.component';
import { LoansComponent } from './tabs/loans/loans.component';
import { InvestmentComponent } from './tabs/investment/investment.component';
import { HomeComponent } from './home/home.component';
import { NavigatorComponent } from './navigator/navigator.component';

@NgModule({
  declarations: [
    AppComponent,
    IncomeComponent,
    OutcomeComponent,
    LoansComponent,
    InvestmentComponent,
    HomeComponent,
    NavigatorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
