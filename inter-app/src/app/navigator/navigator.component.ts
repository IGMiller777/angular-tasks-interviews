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
  public subscription: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private readonly service: DataService
  ) {

  }

  ngOnInit(): void {
    this.subscription = this.service.accessDate().subscribe((date: any) => {
      this.displayUser = [];
      this.flagDisplay = true;
      this.displayUser.push(date);
      console.log('My date', this.displayUser);

    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }



}
