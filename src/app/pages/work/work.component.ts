import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
// import { AirQualityService } from 'src/app/services/air-quality.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent {
  cityName: string='';
  weatherData: any;
  // airQualityData: any;

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

      //     // Fetch air quality data
      // this.airQualityService.getAirQuality(this.cityName)
      // .subscribe(
      //   (airQualityData: any) => {
      //     this.airQualityData = airQualityData;
      //     console.log('Air Quality Data:', this.airQualityData);
      //   },
      //   (error) => {
      //     console.error('Air Quality Error:', error);
      //   }
      // );
    }
  }
}