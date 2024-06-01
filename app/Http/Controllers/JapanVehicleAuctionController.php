<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class JapanVehicleAuctionController extends Controller
{
    public function index()
    {
        return Inertia::render('JapanAuction');
    }
}
