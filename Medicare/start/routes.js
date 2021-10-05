'use strict';

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');

const Helpers = use('Helpers');

Route.get('/user', 'AuthController.view_users');
Route.post('/register', 'AuthController.store');
Route.post('/login', 'AuthController.login');
Route.post('/contact', 'ContactController.contact');
Route.get('/contact', 'ContactController.getContact');
Route.get('/user/:id', 'AuthController.single_user');

Route.group(() => {
  Route.get('/', 'ApiController.getCities');
}).prefix('api/v1');

Route.any('*', ({ response }) => {
  response.download(Helpers.publicPath('react/app.html'));
});
