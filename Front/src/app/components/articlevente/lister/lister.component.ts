import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Article } from 'src/app/interfaces/article';
import { ArticleVente } from 'src/app/interfaces/articlevente';

@Component({
  selector: 'app-lister',
  templateUrl: './lister.component.html',
  styleUrls: ['./lister.component.less']
})
export class ListerComponent {

  @Input() articles: ArticleVente[] = [];
  @Output() idToDel = new EventEmitter;

  @Input() art!: ArticleVente;


  deleting(id: number) {
    this.idToDel.emit(id);

  }

}