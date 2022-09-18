import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Subscription, switchAll} from "rxjs";
import { Router} from "@angular/router";

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss']
})
export class NavigatorComponent implements OnInit {

  id: any;

  constructor(private route: ActivatedRoute, private router: Router ) { }

  ngOnInit(): void {
    this.navigateToPage();
  }

  public navigateToPage() {
    this.route.queryParams.subscribe((query) => {
      this.id = query['tab']
      switch (+this.id) {
        case (1):
          this.router.navigate(['income']);
          break;
        case (2):
          this.router.navigate(['outcome']);
          break;
        case (3):
          this.router.navigate(['loans']);
          break;
        case (4):
          this.router.navigate(['investment']);
          break;
      }

    })
  }

}
