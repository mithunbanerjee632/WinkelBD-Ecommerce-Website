<?php

namespace App\Http\Controllers;

use App\Models\ProductListModel;
use Illuminate\Http\Request;

class ProductController extends Controller
{
  function ProductList(Request $request){
      $remarks = $request->remarks;
      $productList = ProductListModel::where('remark',$remarks)->get();
      return $productList;
  }

  function ProductBySubCategory(Request $request){
      $category = $request->category;
      $subCategory = $request->subcategory;
      $productList = ProductListModel::where('category',$category)->where('subcategory',$subCategory)->get();
      return $productList;
  }
}
