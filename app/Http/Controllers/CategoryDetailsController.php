<?php

namespace App\Http\Controllers;

use App\Models\CategoryLevel1;
use App\Models\CategoryLevel2;
use Illuminate\Http\Request;

class CategoryDetailsController extends Controller
{
    function CategoryDetails(){
        $parentCategory = CategoryLevel1::all();

        $categoryDetails = [];

        foreach ($parentCategory as $value){
            $subCategory=CategoryLevel2::where('category1_name',$value['category1_name'])->get();

            $item = [
              'ParentCategoryName'=>$value['category1_name'],
              'ParentCategoryImage'=>$value['category1_image'],
                'SubCategory'=> $subCategory
            ];

            array_push($categoryDetails,$item);
        }
        return $categoryDetails;
    }
}
