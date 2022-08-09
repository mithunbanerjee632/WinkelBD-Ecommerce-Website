<?php


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\VisitorController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\SiteInfoController;
use App\Http\Controllers\CategoryDetailsController;
use App\Http\Controllers\ProductController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
//Page Routes
Route::get('/visitorDetails',[VisitorController::class,'VisitorDetails']);
Route::post('/contactDetails',[ContactController::class,'ContactDetails']);
Route::get('/siteInfoDetails',[SiteInfoController::class,'SiteInfoDetails']);
//Category Routes
Route::get('/categoryDetails',[CategoryDetailsController::class,'CategoryDetails']);
//Product Routes
Route::get('/productList/{remarks}',[ProductController::class,'ProductList']);
Route::get('/productBySubcategory/{category}/{subcategory}',[ProductController::class,'ProductBySubCategory']);














Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
