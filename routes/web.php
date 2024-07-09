<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Guest\PageController; // Import the PageController

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/
/*ROUTE PAGECONTROLLER CLASS <INDEX> METHOD*/

Route::get('/', [PageController::class, 'index'])->name('home');
