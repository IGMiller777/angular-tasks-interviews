import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IncomeComponent} from "./tabs/income/income.component";
import {OutcomeComponent} from "./tabs/outcome/outcome.component";
import {LoansComponent} from "./tabs/loans/loans.component";
import {InvestmentComponent} from "./tabs/investment/investment.component";
import {HomeComponent} from "./home/home.component";
import {NavigatorComponent} from "./navigator/navigator.component";
import {ItemComponent} from "./example/item/item.component";
import {ItemDetailsComponent} from "./example/item-details/item-details.component";
import {ItemStatComponent} from "./example/item-stat/item-stat.component";

//Child routes
const itemRoutes: Routes = [
  {path: 'details', component: ItemDetailsComponent},
  {path: 'stat', component: ItemStatComponent}
]

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'income/navigator', component: IncomeComponent},
  {path: 'outcome/navigator', component: OutcomeComponent},
  {path: 'loans/navigator', component: LoansComponent},
  {path: 'investment/navigator', component: InvestmentComponent},



  {path: 'navigator', component: NavigatorComponent},
  {path: 'item', component: ItemComponent, children: itemRoutes},
  {path: '**', redirectTo: '/'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
