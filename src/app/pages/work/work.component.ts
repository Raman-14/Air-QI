import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent {
  cityName: string='';
  weatherData: any;

  constructor(private weatherService: WeatherService) { }

  getWeather() {
    if (this.cityName.trim()) {
      this.weatherService.getWeather(this.cityName)
        .subscribe(
          (data: any) => {
            this.weatherData = data;
            console.log(data);
          },
          (error) => {
            console.error(error);
          }
        );
    }
  }
}