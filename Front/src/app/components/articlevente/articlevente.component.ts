import { Component, Input, ViewChild, ViewChildren } from '@angular/core';
import { ArtVenteServiceService } from 'src/app/services/articlevente-service/articlevente.service';
import { ArticleVente } from '../../interfaces/articlevente';
import { Categorie } from '../../interfaces/paginated-categorie.interface';
import { Fournisseur } from '../../interfaces/fournisseur';
import { FormmComponent } from 'src/app/components/articlevente/formm/formm.component';
import { ItemsComponent } from 'src/app/components/articlevente/lister/items/items.component';
import { IdServiceService } from 'src/app/services/other-fonctionnality-service/id-service.service';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-articlevente',
  templateUrl: './articlevente.component.html',
  styleUrls: ['./articlevente.component.less']
})
export class ArticleventeComponent {

  @Input() articles: ArticleVente[] = [];
  @Input() categories: Categorie[] = [];

  @ViewChild(FormmComponent) formmComponent!: FormmComponent;
  @ViewChildren(ItemsComponent) itemsComponent!: ItemsComponent;

  constructor(private articlevente: ArtVenteServiceService) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.articlevente.index().subscribe(
      res => {
        this.articles = res.data;
        // console.log(this.articles);
      }
    )
  }

  supArt(id: number) {
    this.articlevente.delete(id).subscribe(res => {
      console.log(res);
      this.getData()
    })
  }

}