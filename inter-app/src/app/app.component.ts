import { Component } from '@angular/core';
import {DataService} from "./service/data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'inter-app';

  constructor(private service: DataService) {
  }

  callService(value: number) {
    this.service.getPage(value);
  }
}
