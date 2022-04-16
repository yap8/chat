<?php

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Factory\AppFactory;

$app = AppFactory::create();

// @desc    Register a new user
// @access  Public
// @body    { name, username, email, password }
// @return  { id, name, username, email }
$app->post('/api/users/register', function (Request $request, Response $response, array $args) {
  try {
    // db connection
    $db = new DB;
    $conn = $db->connect();

    // get the request body
    $json = $request->getBody();
    $data = json_decode($json, true);

    // destructuring to get all fields into separate variables
    ['name' => $name, 'username' => $username, 'email' => $email, 'password' => $password] = $data;

    // add user to the database
    $sql = "INSERT INTO users(name, username, email, password)
            VALUES ('$name', '$username', '$email', '$password')";

    // perform the query
    $conn->query($sql);

    // get id
    $id = $conn->insert_id;

    // return result
    return $response->withJson([
      'id' => $id,
      'name' => $name,
      'username' => $username,
      'email' => $email
    ]);
  } catch (Exception $error) {
    return $response->withJson($error, 500);
  }
});
