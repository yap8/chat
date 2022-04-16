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
    return $response->withJson($error->getMessage(), 500);
  }
});

// @desc    Authenticate a user
// @access  Public
// @body    { email, password }
// @return  JWT token
$app->post('/api/users/login', function (Request $request, Response $response, array $args) {
  try {
    // db connection
    $db = new DB;
    $conn = $db->connect();

    // get the request body
    $json = $request->getBody();
    $data = json_decode($json, true);

    // destructuring to get all fields into separate variables
    ['email' => $email, 'password' => $password] = $data;

    // find the user that matches given credentials
    $sql = "SELECT * FROM users WHERE
            email = '$email' AND
            password = '$password'";

    // perform the query
    $result = $conn->query($sql);

    // throw error if no results
    if (!$result->num_rows) throw new Exception('No user with such credentials');

    // generate a token
    // ...

    // return the token
    return $response->withJson('token goes here');
  } catch (Exception $error) {
    return $response->withJson($error->getMessage(), 500);
  }
});
