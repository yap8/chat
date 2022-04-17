<?php

// environment variables
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__ . '/..');
$dotenv->load();

// slim
use Slim\Factory\AppFactory;

// jwt
use Firebase\JWT\JWT;
use Firebase\JWT\Key;

$app = AppFactory::create();

// @desc    Register a new user
// @access  Public
// @body    { name, username, email, password }
// @return  JWT
$app->post('/api/users/register', function ($request, $response) {
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
    $jwt = JWT::encode(['id' => $id], $_ENV['SECRET_KEY'], 'HS256');

    // return result
    return $response->withJson($jwt);
  } catch (Exception $error) {
    return $response->withJson($error->getMessage(), 500);
  }
});

// @desc    Authenticate a user
// @access  Public
// @body    { email, password }
// @return  JWT
$app->post('/api/users/login', function ($request, $response) {
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
    $id = $result->fetch_assoc()['id'];
    $jwt = JWT::encode(['id' => $id], $_ENV['SECRET_KEY'], 'HS256');

    // return the token
    return $response->withJson($jwt);
  } catch (Exception $error) {
    return $response->withJson($error->getMessage(), 500);
  }
});
