<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Inertia\Response;

class FrontendController extends Controller
{
    public function Index(): Response
    {
        return Inertia::render('frontend/index');
    }
    public function Test(): Response
    {
        return Inertia::render('frontend/test');
    }
}
