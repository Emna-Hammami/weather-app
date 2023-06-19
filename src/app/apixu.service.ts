import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) {}

  getWeather(location: any){
      return this.http.get(

          'http://api.weatherapi.com/v1/current.json?key=4fe4cb33cdce4e60bbc215804230506&q='+location+'&aqi=no'
      );

}
}
