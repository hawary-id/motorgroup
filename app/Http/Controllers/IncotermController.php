<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class IncotermController extends Controller
{
    public function index()
    {
        return Inertia::render('Incoterms');
    }
}
