<?php

use App\Http\Controllers\AboutController;
use App\Http\Controllers\ArmouredSpecialtyController;
use App\Http\Controllers\BankController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\CoreValueController;
use App\Http\Controllers\FaqController;
use App\Http\Controllers\GuideController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\IncotermController;
use App\Http\Controllers\JapanVehicleAuctionController;
use App\Http\Controllers\MotorcycleController;
use App\Http\Controllers\NewsController;
use App\Http\Controllers\PrivacyPolicyController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SearchController;
use App\Http\Controllers\ShippingLogisticController;
use App\Http\Controllers\TermofTradeController;
use App\Http\Controllers\User\DashboardController;
use App\Http\Controllers\VehicleController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/home', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// })->name('home');
Route::get('/', [HomeController::class, 'index'])->name('home');

Route::get('/new-vehicle-makes', [VehicleController::class, 'index'])->name('vehicle.index');
Route::get('/new-vehicle-makes/{slug}', [VehicleController::class, 'show'])->name('vehicle.show');

Route::get('/lhd-and-rhd-country-guide', [GuideController::class, 'country_steering'])->name('guidecountrySteering');
Route::get('/search', [SearchController::class, 'search'])->name('search');

Route::get('/new-vehicle-makes/{brand}/{slug}', [VehicleController::class, 'detail'])->name('vehicle.detail');

Route::get('/post', [NewsController::class,'index'])->name('news.index');
Route::get('/news/{slug}', [NewsController::class,'detail'])->name('news.detail');

Route::get('/about-motor-groupo', [AboutController::class,'index'])->name('about');

Route::get('/contact-us', [ContactController::class,'index'])->name('contact.index');
Route::get('/shipping-and-logistics', [ShippingLogisticController::class,'index'])->name('shipping.index');
Route::get('/armoured-and-specialty-vehicles', [ArmouredSpecialtyController::class,'index'])->name('armoured.index');
Route::get('/japan-vehicle-auctions', [JapanVehicleAuctionController::class,'index'])->name('japanAction.index');
Route::get('/incoterms', [IncotermController::class,'index'])->name('incoterms.index');
Route::get('/motor-grupo-core-values', [CoreValueController::class,'index'])->name('coreValue.index');
Route::get('/banking-information', [BankController::class,'index'])->name('bank.index');
Route::get('/terms-of-trade', [TermofTradeController::class,'index'])->name('termTrade.index');
Route::get('/privacy-policy', [PrivacyPolicyController::class,'index'])->name('privacyPolicy.index');
Route::get('/f-a-q-about-purchase-and-export-of-vehicles-from-sal-export', [FaqController::class,'index'])->name('faq.index');


Route::get('/new-motorcycle', [MotorcycleController::class,'index'])->name('motorcycle.index');
Route::get('/new-motorcycle/{brand}/{slug}', [MotorcycleController::class,'detail'])->name('motorcycle.detail');

Route::prefix('user')->name('user.*')->group(function () {
    Route::get('/dashboard', [DashboardController::class,'index'])->name('dashboard.index');
});


Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
