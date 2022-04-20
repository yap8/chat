<?php

// environment variables
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__ . '/..');
$dotenv->load();

// jwt
use Firebase\JWT\JWT;
use Firebase\JWT\Key;

// @desc    Send a message
// @access  Private
// @body    { chatId, content }
// @return  message
$app->post('/api/message', function ($request, $response) {
  try {
    // db connection
    $db = new DB;
    $conn = $db->connect();

    // get current user id
    $userId = $request->getAttribute('user');

    // get the request body
    $json = $request->getBody();
    $data = json_decode($json, true);

    // destructuring to get all fields into separate variables
    ['chatId' => $chatId, 'content' => $content,] = $data;

    // send a message
    $sql = "INSERT INTO messages(chat_id, sender_id, content) VALUES ('$chatId', '$userId', '$content');";

    // perform the query
    $conn->query($sql);

    // return result
    return $response->withJson('Message sent');
  } catch (Exception $error) {
    return $response->withJson($error->getMessage(), 500);
  }
})->add($private);

// @desc    Get a list of messages
// @access  Private
// @body    { chatId }
// @return  array of messages
$app->get('/api/messages', function ($request, $response) {
  try {
    // db connection
    $db = new DB;
    $conn = $db->connect();

    // get current user id
    $userId = $request->getAttribute('user');

    // get the request body
    $json = $request->getBody();
    $data = json_decode($json, true);

    // destructuring to get all fields into separate variables
    ['chatId' => $chatId] = $data;

    // find messages
    $sql = "SELECT * FROM messages WHERE chat_id = '$chatId';";

    // perform the query
    $result = $conn->query($sql);

    // fetch result
    $result = $result->fetch_all(MYSQLI_ASSOC);

    // return result
    return $response->withJson($result);
  } catch (Exception $error) {
    return $response->withJson($error->getMessage(), 500);
  }
})->add($private);
