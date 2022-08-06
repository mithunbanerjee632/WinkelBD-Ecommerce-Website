<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
       Schema::create('site_info',function(Blueprint $table){
           $table->bigIncrements('id');
           $table->text('about_us',5000);
           $table->text('terms_condition',5000);
           $table->text('privacy_policy',5000);
           $table->text('purchase_guide',5000);
           $table->text('refund_policy',5000);
           $table->text('about_company',5000);
           $table->text('address',5000);
           $table->string('android_link',100);
           $table->string('ios_link',100);
           $table->string('facebook_link',100);
           $table->string('twitter_link',100);
           $table->string('instagram_link',100);
           $table->string('delivery_notice',100);
       });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
};
