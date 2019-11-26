import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-addarticle',
  templateUrl: './addarticle.component.html',
  styleUrls: ['./addarticle.component.css']
})
export class AddarticleComponent implements OnInit {
  nom: string;
  prix: number;
  re: string;
  date: string;
  id: number;
  photo: string;
  submitted: boolean;
  cit: string;
  msg: string
  disp: boolean;
  constructor(private articleservice: ArticleService) { }
  onSubmit(f: NgForm) {
    console.log("Affichage à partir du formulaire" + f.value['cit'] + " " + f.value['disp']);
    this.submitted = true;

    const ajout = this.articleservice.addProduit(this.nom, this.id, this.prix, this.photo, this.disp, this.date, this.re, this.cit);
    if (ajout)
      this.msg = "Votre nouveau produit:" + this.id + " a bien été ajouté";
    else
      this.msg = "Le produit d'id " + this.id + " existe déjà !";
  }




  ngOnInit() {
  }

}
