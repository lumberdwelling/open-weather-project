import { Injectable } from '@angular/core';
import { AppComponent } from './app.component'

@Injectable()
export class WeatherService {

  constructor() { }

}

/* unfinished dependency injector
@Injectable()
export const WeatherService: zipCode = {
  apiEndpoint: 'http://api.openweathermap.org/data/2.5/weather?zip=' + {zipCode} + ',us&units=imperial&APPID=4372f5664f2189869696f5af296fa35d'
  title: 'zipCode'

}; */
