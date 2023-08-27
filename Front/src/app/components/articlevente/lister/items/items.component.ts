import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Article } from 'src/app/interfaces/article';
import { ArticleVente } from 'src/app/interfaces/articlevente';

@Component({
  selector: '.app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.less']
})
export class ItemsComponent {

  @Input() art!: ArticleVente;

  @Output() del = new EventEmitter;


  countdown: number = 3;
  countdownTimer: any;
  articleToDelete: number | null = null;
  isConfirming: boolean = false;


  deleteArt(article: ArticleVente) {
    if (this.countdownTimer) {
      clearInterval(this.countdownTimer);
    }

    if (this.isConfirming && this.articleToDelete === article.id) {
      this.isConfirming = false;
      this.articleToDelete = null;
      this.countdown = 3;
      this.del.emit(article.id);

    } else {
      this.articleToDelete = article.id;
      this.isConfirming = true;

      this.countdownTimer = setInterval(() => {
        this.countdown--;
        if (this.countdown === 0) {
          clearInterval(this.countdownTimer);
          this.isConfirming = false;
          this.articleToDelete = null;
          this.countdown = 3;
        }
      }, 1000);
    }
  }
}