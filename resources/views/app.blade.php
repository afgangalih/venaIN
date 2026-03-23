<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5">
        <meta name="theme-color" content="#F8FAFC">
        <meta name="description" content="Vena.ai — Luxury clinical intelligence platform for predictive cardiovascular diagnostics.">

        <title inertia>{{ config('app.name', 'Vena.ai') }}</title>

        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap" rel="stylesheet">

        <style>
            /* Balanced headings prevent orphans/widows */
            h1, h2, h3 { text-wrap: balance; }
            /* Premium scrollbar for the medical surface */
            ::-webkit-scrollbar { width: 6px; }
            ::-webkit-scrollbar-track { background: transparent; }
            ::-webkit-scrollbar-thumb { background: #E2E8F0; border-radius: 10px; }
            ::-webkit-scrollbar-thumb:hover { background: #CBD5E1; }
        </style>

        @viteReactRefresh @vite(['resources/css/app.css', 'resources/js/app.jsx'])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>