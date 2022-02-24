import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor(private http: HttpClient) {}

  public getNews({ country = '', category = '' }): Observable<any> {
    const URL = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=588731edf7b04824ac9df4e3016d0d76`;
    return this.http.get(URL);
  }
}
