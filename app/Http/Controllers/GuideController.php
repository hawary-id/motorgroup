<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class GuideController extends Controller
{
    public function country_steering()
    {
        return Inertia::render('GuideCountrySteering');
    }
}
