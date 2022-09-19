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
  public page: string | number = '';

  public message = new Subject();
  public dataUser = new Subject();

  constructor() {
    this.usersData = dataJSON;
  }

  public setMessage(date:any) {
    console.log(date, 'Service')
    this.message.next(date)
  }
  public accessMessage() {
    return this.message.asObservable();
  }


  public setDate (page: any) {
    this.dataForRender = [];
    this.usersData.map((data) => {
      if(page === 1) {
        if(data.type === 'income'){
          this.dataForRender.push(data);
        }
      }
      if(page === 2) {
        if(data.type === 'outcome'){
          this.dataForRender.push(data);
        }
      }
      if(page === 3) {
        if(data.type === 'loan'){
          this.dataForRender.push(data);
        }
      }
      if(page === 4) {
        if(data.type === 'investment'){
          this.dataForRender.push(data);
        }
      }
    })
    this.dataUser.next(this.dataForRender)

  }

  public accessDate() {
    return this.dataUser.asObservable();

  }
}

// this.querySubscription = this.route.queryParams
//   .subscribe((params: any) => {
//     this.pageNumber = params['tab'];
//       this.changeData(this.pageNumber);
//   })
