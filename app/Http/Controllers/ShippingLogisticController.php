<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ShippingLogisticController extends Controller
{
    public function index()
    {
        return Inertia::render('ShippingLogistic');
    }
}
