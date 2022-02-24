import { NewsService } from './shared/services/news.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public title = 'Search News';

  listNews: any[] = [];
  loading = false;

  constructor(private newService: NewsService) {}

  searchNews(params: any) {
    this.loading = true;
    this.listNews = [];

    setTimeout(() => {
      this.newService.getNews(params).subscribe(
        (data) => {
          this.loading = false;
          this.listNews = data.articles;
        },
        (error) => {
          console.log(error);
          this.loading = false;
        }
      );
    }, 1000);
  }
}
