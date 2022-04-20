<?php

// test route
$app->get('/api/home', function($request, $response, $args) {
  // get user id
  $user = $request->getAttribute('user');

  // return user id
  return $response->withJson($user);
})->add($private);

