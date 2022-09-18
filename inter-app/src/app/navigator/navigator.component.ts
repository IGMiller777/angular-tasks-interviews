import {Component, Input, OnInit} from '@angular/core';
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
  providers: [DataService]
})
export class NavigatorComponent implements OnInit {
  private querySubscription!: Subscription;
  public pageNumber!: number;

  public displayUser: any = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private readonly service: DataService
  ) {

  }

  ngOnInit(): void {
    this.getDataService();
    this.service.count$.subscribe(count => this.log(count))
  }

  log(data: any) {
    console.log(data, 'NNNNNNNNNn')
  }

  public getDataService() {
    this.service.newDate().subscribe((date) => {
      console.log('DataNew', date);
        this.displayUser = date;
    })
  }


}
