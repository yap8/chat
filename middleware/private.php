<?php

// environment variables
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__ . '/..');
$dotenv->load();

// jwt
use Firebase\JWT\JWT;
use Firebase\JWT\Key;

// private route middleware
$private = function($request, $handler) {
  try {
    // get Authorization header
    $authorization = $request->getHeaders()['Authorization'][0];

    // get jwt
    $jwt = explode(' ', $authorization)[1];

    // decode the token if it's malformed throw exception
    $user = JWT::decode($jwt, new Key($_ENV['SECRET_KEY'], 'HS256'))->id;

    // add user id to attributes
    $request = $request->withAttribute('user', $user);

    // continue
    $response = $handler->handle($request);

    return $response;
  } catch (Exception $error) {
    $response = $handler->handle($request);

    return $response->withJson('Not authorized', 403);
  }
};
