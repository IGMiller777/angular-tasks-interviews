import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IncomeComponent} from "./tabs/income/income.component";
import {OutcomeComponent} from "./tabs/outcome/outcome.component";
import {LoansComponent} from "./tabs/loans/loans.component";
import {InvestmentComponent} from "./tabs/investment/investment.component";
import {HomeComponent} from "./home/home.component";
import {NavigatorComponent} from "./navigator/navigator.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'income', component: IncomeComponent},
  {path: 'outcome', component: OutcomeComponent},
  {path: 'loans', component: LoansComponent},
  {path: 'investment', component: InvestmentComponent},
  {path: 'navigator', component: NavigatorComponent},
  {path: '**', redirectTo: '/'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
