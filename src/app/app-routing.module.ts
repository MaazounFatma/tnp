import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { ArticlesComponent } from './articles/articles.component';
import { AddarticleComponent } from './addarticle/addarticle.component';
import { ArticleComponent } from './article/article.component';
import { ErreurComponent } from './erreur/erreur.component';
import { OptionsComponent } from './options/options.component';

const routes: Routes = [
  { path: 'accueil', component: AcceuilComponent },
  { path: 'articles', component: ArticlesComponent },
  { path: 'addarticle', component: AddarticleComponent },
  { path: 'Options', component: OptionsComponent },
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: 'articles/:id', component: ArticleComponent },
  { path: '**', component: ErreurComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
