import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Observable, Subscription, switchAll} from "rxjs";
import { Router} from "@angular/router";
import {IData} from "../interfaces/data.interface";
import {HttpClient} from "@angular/common/http";
import dataJSON from '../data.json';
import {DataService} from "../service/data.service";

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss'],
})
export class NavigatorComponent implements OnInit,OnDestroy {
  public displayUser: any = [];
  public flagDisplay: boolean = false;


  msgList: any = [];
  subscription: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private readonly service: DataService
  ) {

  }

  ngOnInit(): void {
    // this.getDataService();
    this.subscription = this.service.accessMessage().subscribe((msg) => {
      console.log(msg, 'MESSAGE')
      this.msgList.push(msg);
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  // public getDataService() {
  //   this.service.getPage().subscribe((date) => {
  //      return this.displayUser = date;
  //   })
  // }


}
