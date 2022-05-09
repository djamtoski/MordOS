import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'os-newspaper',
  templateUrl: './newspaper.component.html',
  styleUrls: ['./newspaper.component.scss']
})
export class NewspaperComponent implements OnInit {

  public news: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get(`https://jsonplaceholder.typicode.com/comments`).subscribe((news) => {
      this.news = news;
    });
  }
}
