import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {IData} from "../interfaces/data.interface";
import {DataService} from "../service/data.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss'],
})
export class NavigatorComponent implements OnInit,OnDestroy {

  public dataSubscr: IData[] = [];
  public displayDate: IData[] = [];
  public flagDisplay: boolean = false;
  public subscription: Subscription | undefined;

  constructor(private readonly service: DataService) { }

  ngOnInit(): void {
    this.subscription = this.service.accessDate().subscribe((date: any) => {
      this.dataSubscr = [];
      this.flagDisplay = true;
      this.dataSubscr.push(date);
      this.displayDate = this.dataSubscr.flat();
    })
  }

  ngOnDestroy(): void {
    this.subscription!.unsubscribe();
  }

}
