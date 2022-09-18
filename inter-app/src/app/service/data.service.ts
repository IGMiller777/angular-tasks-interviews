import { Injectable } from '@angular/core';
import dataJSON from '../data.json';
import {IData} from "../interfaces/data.interface";
import {Observable, of, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public usersData!: IData[];
  public dataForRender: any = [];

  public count$ = new Subject<number>();

  constructor() {
    this.usersData = dataJSON;
  }

  public getPage(page: number) {
    this.count$.next(page);

    this.dataForRender = [];
    this.usersData.map((user) => {
      if(page === 1) {
        if(user.type === 'income'){
          this.dataForRender.push(user);
        }
      }
      if(page === 2) {
        if(user.type === 'outcome'){
          this.dataForRender.push(user);
        }
      }
      if(page === 3) {
        if(user.type === 'loan'){
          this.dataForRender.push(user);
        }
      }
      if(page === 4) {
        if(user.type === 'investment'){
          this.dataForRender.push(user);
        }
      }
    })
    this.newDate();

  }

  public newDate(): Observable<IData> {
    console.log(this.dataForRender, 'DATA SERVICe')
    return of(this.dataForRender)
  }

}

// this.querySubscription = this.route.queryParams
//   .subscribe((params: any) => {
//     this.pageNumber = params['tab'];
//       this.changeData(this.pageNumber);
//   })
