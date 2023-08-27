import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ImagesService } from 'src/app/services/image-service/image.service';
import { SharedBoolService } from 'src/app/services/other-fonctionnality-service/shared-bool.service';
import { IdServiceService } from 'src/app/services/other-fonctionnality-service/id-service.service';


@Component({
  selector: 'app-formm',
  templateUrl: './formm.component.html',
  styleUrls: ['./formm.component.less']
})
export class FormmComponent {

  artVenteForm!: FormGroup;
  name: string = '';
  ref: string = 'REF-rob-robes-1';
  pv: string = '10';
  cout: string = '11';
  img: string = "assets/images/reunion_family.jpg";


  constructor(private fb: FormBuilder, private imageService: ImagesService, private sharedService: SharedBoolService, private idService: IdServiceService) {
    this.artVenteForm = this.fb.group({
      libelle: ['robe evasé'],
      categorie: ['categorie1'],
      promo: [true],
      valeur: ['10'],
      articlesConfection: this.fb.array([
        this.fb.group({
          lib: 'tissu1',
          qte: 5
        })
      ]),
      photo: [this.img],
      marge: ['5000'],
      prixVente: ['30000']
    });
  }

  get articlesConfection() {
    return this.artVenteForm.get('articlesConfection') as FormArray;
  }

  addArticleConfection() {
    const newArticleConfection = this.fb.group({
      lib: '',
      qte: 0
    });

    this.articlesConfection.push(newArticleConfection);
  }

  removeArticleConfection(index: number) {
    this.articlesConfection.removeAt(index);
  }

  handleFileChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const selectedImage = inputElement.files?.[0] as File;
    this.name = selectedImage.name

    this.imageService.recupImg(selectedImage).subscribe({
      next: (arg: string | ArrayBuffer | null) => {
        if (typeof arg === 'string') {
          this.img = arg;
          this.artVenteForm.patchValue({
            photo: this.img,
          });
        }
      }
    });
    
    console.log(this.name);
    console.log(this.img);
  }


  onSubmit()
  {
    console.log(this.artVenteForm.value);
  }


}