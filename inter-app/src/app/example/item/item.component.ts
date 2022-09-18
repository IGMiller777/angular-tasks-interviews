import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  id: any;
  private routeSubscription!: Subscription;

  constructor(private route: ActivatedRoute){

    this.routeSubscription = route.params.subscribe(params=>this.id=params['id']);
  }

  ngOnInit(): void {
  }

}
