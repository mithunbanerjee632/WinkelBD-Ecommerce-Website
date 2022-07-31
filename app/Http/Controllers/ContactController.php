<?php

namespace App\Http\Controllers;

use App\Models\ContactModel;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    function ContactDetails(Request $request){
        $name = $request->input('name');
        $email = $request->input('email');
        $mobile = $request->input('mobile');
        $message = $request->input('message');

        date_default_timezone_set('Asia/Dhaka');
        $contact_time =date('h:i:sa');
        $contact_date =date('d-m-Y');

        $result = ContactModel::insert([
            'name'=>$name,
            'email'=>$email,
            'mobile'=>$mobile,
            'message'=>$message,
            'contact_date'=>$contact_time,
            'contact_time'=>$contact_date,
        ]);

        return $result;
    }
}
