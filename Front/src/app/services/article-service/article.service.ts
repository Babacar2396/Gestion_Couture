
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/app/environnements/environnement';
import { MainService } from '../main/main.service';
import { Articles } from '../../interfaces/articles';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ArticleService extends MainService<Articles> {

  override apiUrl = environment.apiUrl + '/articles';

  constructor(http: HttpClient) {
    super(http);
  }



}