import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  identifiant: number;

  constructor(private activatedRoute: ActivatedRoute, private articleservice: ArticleService) { }
  Articles;

  ngOnInit() {
    this.identifiant = this.activatedRoute.snapshot.params['id'];
    this.Articles = this.articleservice.Articles;


  }

}
