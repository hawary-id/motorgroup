<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class CoreValueController extends Controller
{
    public function index()
    {
        return Inertia::render('CoreValue');
    }
}
