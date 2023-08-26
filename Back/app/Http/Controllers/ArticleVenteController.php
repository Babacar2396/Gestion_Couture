<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreArticleVenteRequest;
use App\Http\Requests\UpdateArticleVenteRequest;
use App\Models\ArticleVente;
use App\Http\Resources\ArticleVenteResource;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;
use App\Http\Resources\ArticleResource;
use Illuminate\Support\Facades\Storage;
use App\Models\Categorie;


class ArticleVenteController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $articles = ArticleVente::all();
        return response()->json([
            'data'=>
                [
                    'articlesVentes' => ArticleVenteResource::collection($articles)
                ]
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreArticleVenteRequest $request)
    {
        return DB::transaction(function () use ($request) {
        
            $article = new ArticleVente();
            
            $cat = Categorie::where('libelle', $request->validated()['categorie_libelle'])->first();
            if (!$cat) {
                throw new \Exception('Catégorie introuvable');
            }
            $article->categorie_id = $cat->id;
            $article->libelle = $request->validated()['libelle'];
            $article->promo = $request->validated()['promo'];
            if ($request->validated()['promo'] == 1) {
                $article->valeur = $request->validated()['valeur']; 
            }
            
            $article->cout = $request->validated()['cout'];
            if ($request->marge) {
                $article->marge = $request->validated()['marge'];
                $article->prix_vente = $request->validated()['cout'] + $request->validated()['marge'];
            }
            $article->qteStock = 20;

            // $imagePath = str_replace('data:image/jpeg;base64,', '', $request->photo_name);
            // $fileName = $request->photo;

            // if (Storage::disk('public')->put($fileName, base64_decode($imagePath))) {
            //     $article->photo = $fileName;
            // } else {
            //     throw new \Exception('Erreur lors de l\'insertion de l\'image');
            // }

            $libellePrefix = substr($article->libelle, 0, 3);
            $categorieText = $article->categorie->libelle;
            $orderNumber = 1;
            $reference = "REF-$libellePrefix-$categorieText-$orderNumber";
            $article->reference = $reference;
            
            $article->save();

            return response()->json(
                [
                    'message' => 'Article créé avec succès', 
                    'data' => $article, 
                    'status' => 201
                ]);
        });
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateArticleVenteRequest $request, ArticleVente $articleVente)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($articleId)
    {
        return DB::transaction(function () use ($articleId) {
            
            $article = ArticleVente::findOrFail($articleId);
            $article->article()->detach();
            $article->delete();

            return response()->json(
                [
                    'message' => 'Article supprimé avec succès', 
                    'data'=>$article, 
                    'status' => 200
                ]);
        });
    }


}
