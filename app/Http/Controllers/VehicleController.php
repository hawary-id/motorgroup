<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Str;

class VehicleController extends Controller
{
    public function index()
    {
        return Inertia::render('Vehicle');
    }

    public function show(Request $request, $slug)
    {
        return Inertia::render('VehicleBrand',[
            'slug' => $slug,
        ]);
    }

    public function detail(Request $request,$brand,$slug)
    {
        return Inertia::render('ProductDetail',[
            'brand' => $brand,
            'slug' => $slug,
        ]);
    }
}
