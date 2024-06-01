<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class MotorcycleController extends Controller
{
    public function index()
    {
        return Inertia::render('Motorcycle');
    }

    public function detail(Request $request,$brand,$slug)
    {
        return Inertia::render('MotorcycleDetail',[
            'brand' => $brand,
            'slug' => $slug,
        ]);
    }
    
}
