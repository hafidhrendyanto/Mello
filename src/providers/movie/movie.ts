import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class MovieProvider {
  APIkey:string = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOGE4ZDE5ZjcyNTI2NWE4ZWQxMTU3NDI0MTAwODI4YiIsInN1YiI6IjVlY2YzOGM1NWMwNzFiMDAxZTI5NzdiNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Dk9xob3xfUj_Zu9MjHghr6IJz33KJL8obBKuKiI5Dl0";
  options: {
    headers?: HttpHeaders | {[header: string]: string | string[]},
    observe?: any,
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean,
    responseType?: any,
    withCredentials?: boolean,
  }

  constructor(public http: HttpClient) {
    console.log("Hello Weather Provider");

    this.options = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOGE4ZDE5ZjcyNTI2NWE4ZWQxMTU3NDI0MTAwODI4YiIsInN1YiI6IjVlY2YzOGM1NWMwNzFiMDAxZTI5NzdiNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Dk9xob3xfUj_Zu9MjHghr6IJz33KJL8obBKuKiI5Dl0'
      }),
      observe: "body",
      responseType: "json"
    }
  }

  getPopular(): Observable<any> {
    return this.http.get('https://api.themoviedb.org/3/movie/popular', this.options);
  }

}
