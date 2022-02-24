import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  
  constructor(private http: HttpClient) {}

  public getNews(params: any): Observable<any> {

    const URL = `https://newsapi.org/v2/top-headlines?country=${params.country}&category=${params.category}&apiKey=588731edf7b04824ac9df4e3016d0d76`;

    return this.http.get(URL);
  }
}
