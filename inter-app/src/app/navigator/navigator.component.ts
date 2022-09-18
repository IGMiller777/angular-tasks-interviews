import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Observable, Subscription, switchAll} from "rxjs";
import { Router} from "@angular/router";
import {IData} from "../interfaces/data.interface";
import {HttpClient} from "@angular/common/http";
import dataJSON from '../data.json';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss']
})
export class NavigatorComponent implements OnInit {
  private querySubscription!: Subscription;
  public pageNumber!: number;
  public users!: IData[];

  constructor(
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.getNavigatePage();
    this.getDateFromService();
  }

  public getDateFromService() {
    this.users = dataJSON;
    console.log(this.users)
  }

  public getNavigatePage() {
    this.querySubscription = this.route.queryParams
      .subscribe((params: any) => {
        this.pageNumber = params['tab']
      })
  }



}
