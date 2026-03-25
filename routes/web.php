<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Landing');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
});

Route::get('/analyze', function () {
    return Inertia::render('Assessment/Index');
});

Route::post('/analyze', function (\Illuminate\Http\Request $request) {
    $data = $request->validate([
        'age' => 'nullable', 'sex' => 'nullable', 'trestbps' => 'nullable',
        'chol' => 'nullable', 'fbs' => 'nullable', 'restecg' => 'nullable',
        'thalach' => 'nullable', 'exang' => 'nullable', 'slope' => 'nullable',
        'cp' => 'nullable', 'oldpeak' => 'nullable', 'thal' => 'nullable'
    ]);

    // Mock risk calculation logic
    $score = rand(12, 88);
    return Inertia::render('Assessment/Index', [
        'result' => [
            'riskScore' => $score,
            'status' => $score <= 35 ? 'Optimal' : ($score < 65 ? 'Elevated' : 'High Risk'),
            'inputs' => $data
        ]
    ]);
});
