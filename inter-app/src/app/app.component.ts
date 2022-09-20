import {Component} from '@angular/core';
import {DataService} from "./service/data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private service: DataService) {
  }

  public addDate(count: any) {
    this.service.setDate(count);
  }
}
