import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/app/environnements/environnement';
import { MainService } from '../main/main.service'; 
import { ArticleVente } from '../../interfaces/articlevente'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleVenteService extends MainService<ArticleVente> {

  override apiUrl = environment.apiUrl + '/articlesvente'; 

  constructor(http: HttpClient) {
    super(http);
  }
}
