<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class NewsController extends Controller
{
    public function index()
    {
        return Inertia::render('News');
    }

    public function detail($slug)
    {
        return Inertia::render('NewsDetail',[
            'slug' => $slug,
        ]);
    }
}
