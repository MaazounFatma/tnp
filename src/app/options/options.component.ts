import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {
  id1: number;
  message: string;

  constructor(private articleservice: ArticleService) { }
  onSubmit(f1: NgForm) {
    console.log(this.id1);
    const supp = this.articleservice.supprimerLivre(this.id1)
    if (supp) { this.message = "votre element a bien ete supprimer"; }
    else this.message = "votre element n'exisite pas "

  }

  prix: number;
  id2: number;
  nom: string;
  msg2: string;
  onSub(f3: NgForm) {
    console.log(this.id2, this.prix, this.nom);
    const modif = this.articleservice.modiferLivre(this.id2, this.prix, this.nom);
    if (modif) { this.msg2 = "votre element a ete modifié"; }
    else { this.msg2 = "votre element n'as pas ete modifé;" }
  }


  ngOnInit() {
  }

}
