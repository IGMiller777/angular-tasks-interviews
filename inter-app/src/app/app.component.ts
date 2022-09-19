import {Component, ElementRef, ViewChild} from '@angular/core';
import {DataService} from "./service/data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'inter-app';

  public message: string = ''

  constructor(private service: DataService) {
  }

  public addDate(count: any) {
    this.service.setDate(count);
  }
}
