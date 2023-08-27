import { Component, Input, ViewChild, ViewChildren } from '@angular/core';
import { ArticleService } from '../../services/article-service/article.service'; 
import { Articles } from '../../interfaces/articles';
import { Categorie } from '../../interfaces/paginated-categorie.interface';
import { Fournisseur } from '../../interfaces/fournisseur';
import { FormComponent } from './form/form.component';
import { ItemComponent } from './liste/item/item.component';
import { IdServiceService } from 'src/app/services/other-fonctionnality-service/id-service.service';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.less']
})

export class ArticleComponent {

id: number | null = null;

@Input() articles: Articles[]=[];
// @Input() article!: Article;
@Input() editedArticle!: Articles;
@Input() categories: Categorie[]=[];
@Input() fournisseurs: Fournisseur[]=[];
@ViewChild(FormComponent) formComponent!: FormComponent;
@ViewChildren(ItemComponent) itemComponent!: ItemComponent;

  constructor(private articleService: ArticleService) {}
  
  ngOnInit(){
    this.getData();
  }
  
  getData(){
    this.articleService.index().subscribe(
      (      res: { data: { articles: Articles[]; }; }) => {
        this.articles = res.data.articles;
        // console.log(this.articles);
      }
    )
    this.articleService.getCatAndFour().subscribe(
      (      res: { data: { categories: Categorie[]; fournisseurs: Fournisseur[]; }; })=>{
        this.categories = res.data.categories;
        this.fournisseurs = res.data.fournisseurs;
      }
    )
  }

  addArticle(article: Articles){
    this.articleService.store(article).subscribe(
      (      res: any)=>{
        console.log(res);
        this.getData()
      }
    )
  }

  supArt(id:number){
    this.articleService.delete(id).subscribe((res: any)=>{
    console.log(res);
    this.getData()
    })
  }

  updateArt(article: Articles){
    this.articleService.update(article, article.id).subscribe(
      (      res: any)=>
      { console.log(res)
        this.getData()
      });
  }

  editArticle(article: Articles) {
    const fournisseursArray = article.fournisseurs.map((fournisseur: { nomComplet: any; }) => fournisseur.nomComplet);
    const fournisseursString = fournisseursArray.join(', '); 
    this.formComponent.selectedFournisseurs = fournisseursArray;
    
    if (this.formComponent) {
        this.formComponent.articleForm.patchValue({
        libelle: article.libelle,
        prix: article.prix,
        stock: article.stock,
        categorie: article.categorie,
        fournisseurs: fournisseursString,
        photo: article.photo
      });
    }
    this.formComponent.img = `http://localhost:8000/storage/${article.photo}`;

  }


}
