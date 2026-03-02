<?php

use App\Http\Controllers\Frontend\FrontendController;
use Illuminate\Support\Facades\Route;

Route::get('/', [FrontendController::class, 'Index'])->name('home');
Route::get('/test', [FrontendController::class, 'Test'])->name('test');
