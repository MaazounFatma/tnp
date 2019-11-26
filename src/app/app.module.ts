import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AcceuilComponent } from './acceuil/acceuil.component';
import { ArticlesComponent } from './articles/articles.component';

import { ErreurComponent } from './erreur/erreur.component';
import { MenuComponent } from './menu/menu.component';
import { ArticleComponent } from './article/article.component';
import { AddarticleComponent } from './addarticle/addarticle.component';
import { OptionsComponent } from './options/options.component';


@NgModule({
  declarations: [
    AppComponent,

    AcceuilComponent,
    ArticlesComponent,

    ErreurComponent,
    MenuComponent,
    ArticleComponent,
    AddarticleComponent,
    OptionsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
