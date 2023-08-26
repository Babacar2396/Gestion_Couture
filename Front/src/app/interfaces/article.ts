import { Fournisseur } from "./fournisseur";
import { Categorie } from "./paginated-categorie.interface";

export interface Article {
    id: number | null;
    libelle: string;
    categorie_id?: string;
    categorie_libelle?: string;
    categorie_numArticles?: number,
    categorie?: Categorie;   
    prix: string;
    stock: string;
    fournisseurs: Fournisseur[],
    ref?: string,
    photo: string,
    photo_name: any

}