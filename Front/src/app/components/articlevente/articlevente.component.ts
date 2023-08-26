import { Component } from '@angular/core';

@Component({
  selector: 'app-articlevente',
  templateUrl: './articlevente.component.html',
  styleUrls: ['./articlevente.component.less']
})
export class ArticleventeComponent {
  pageChanged(event: any): void {
    // Mettez à jour la liste des libellés en fonction de la nouvelle page (event.page)
    // Implémentez la logique pour charger les données de la nouvelle page ici
    console.log('Nouvelle page :', event.page);
  }

 
  promoActive = false; 
  valeurPromo: number | null = null;

  active(event:Event) {
    const target = event.target as HTMLInputElement
    this.promoActive=target.checked;
  }
  
  
}
