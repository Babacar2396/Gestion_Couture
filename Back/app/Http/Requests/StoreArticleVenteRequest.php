<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreArticleVenteRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            "libelle" => 'required',
            "categorie_libelle" => 'required',
            "prix_vente" => 'required',
            "cout" => 'required',
            "promo" => 'required',
            "valeur" => 'required',
            "marge" => 'required',
            // "articlesConfection" => 'required|Array'
        ];
    }

    public function messages(): array
    {
        return [
            "libelle.required" => "Le libellé est requis.",
            "prix_vente.required" => "Le prix de vente est requis.",
            "cout.required" => "Le cout est requis.",
            "promo.required" => "Le promo est requis.",
            "valeur.required" => "La valeur est requise.",
            "marge.required" => "La marge est requise.",
            "categorie_libelle.required" => "La catégorie est requise.",
            // "articlesConfection.required" => "Les articles de confection sont requis.",
            // "articlesConfection.array" => "Les articles de confection sont un tableau."
        ];
    }
}