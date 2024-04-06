import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiUrl = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather';

  constructor(private http: HttpClient) { }

  getWeather(cityName: string) {
    const url = `${this.apiUrl}?city=${cityName}`;
    const headers = {
      'X-RapidAPI-Key': 'be46741774mshf9b8072857a4a75p114601jsnbf0fe5d4da6f',
      'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    };

    return this.http.get(url, { headers });
  }
}
