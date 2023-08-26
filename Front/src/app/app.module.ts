import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategorieService } from './services/categorie-service/categorie.service';
import { ArticleService } from './services/article-service/article.service';
import { CategoriesComponent } from './components/categories/categories.component';
import { ImagesService } from 'src/app/services/image-service/image.service';
import { ArticleComponent } from './components/article/article.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormComponent } from './components/article/form/form.component';
import { ListComponent } from './components/article/liste/liste.component';
import { PaginationComponent } from './components/article/pagination/pagination.component';
import { ItemComponent } from './components/article/liste/item/item.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ArticleventeComponent } from './components/articlevente/articlevente.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    ArticleComponent,
    NavbarComponent,
    FormComponent,
    ListComponent,
    PaginationComponent,
    ItemComponent,
    ArticleventeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    
  ],
  providers: [CategorieService, ArticleService, ImagesService],
  bootstrap: [AppComponent]
})

export class AppModule { }