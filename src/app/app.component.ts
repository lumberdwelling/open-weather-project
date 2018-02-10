import { Component } from '@angular/core';
import { Http, Response } from '@angular/http'; 
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Weather';
  private apiUrl = 'http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=4372f5664f2189869696f5af296fa35d';
  data: any = {};

  constructor(private http: Http) {
    this.getWeather();
    this.getData();

  }
  
  getData() {
    return this.http.get(this.apiUrl)
      .map((res: Response) => res.json())
  }
  getWeather() {
    this.getData().subscribe(data => {
      console.log(data);
      this.data = data
    })
  }
}

