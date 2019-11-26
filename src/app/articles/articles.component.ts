import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';


@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  Articles;
  constructor(private articleservice: ArticleService) { }

  ngOnInit() {
    this.Articles = this.articleservice.Articles;
  }

}
