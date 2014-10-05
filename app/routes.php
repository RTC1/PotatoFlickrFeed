<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/

Route::get('/', function()
{
	return View::make('index');
});


/**
 * CACHE BUSTERS
 */
Route::pattern('hash', '[a-zA-Z0-9]+');
Route::pattern('allowedExtensions', '(jpg|png|gif|js|css|woff|ttf|svg|eot){1}');
Route::pattern('folders', '[a-zA-Z0-9_\/]*');
Route::pattern('fileName', '.+');

$guesser = \Symfony\Component\HttpFoundation\File\MimeType\MimeTypeGuesser::getInstance();

Route::get(
    '{folders}{fileName}-{hash}.{allowedExtensions}',
    array(
        function ($folders, $fileName, $hash, $extension) use ($guesser) {
            $shortPath = $folders . $fileName . '.' . $extension;
            $path = public_path() . DIRECTORY_SEPARATOR . $shortPath;

            if (!file_exists($path)) {
                return App::abort(404);
            }

            $headers = [
                'Content-Type' => $guesser->guess($path),
                'Cache-Control' => 'max-age=31536000',
                'Pragma' => 'cache',
                'Expires' => 'Sun, 17 Jan 2038 19:14:07 GMT'
            ];

            if (strtolower($extension) == 'css') {
                return Bust::css($shortPath);
            } else {
                return Response::make(file_get_contents($path), 200, $headers);
            }
        }
    )
);
