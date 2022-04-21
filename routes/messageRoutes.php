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
// @body    {}
// @return  array of messages
$app->get('/api/messages/{chatId}', function ($request, $response, $params) {
  try {
    // db connection
    $db = new DB;
    $conn = $db->connect();

    // get current user id
    $userId = $request->getAttribute('user');

    // destructuring to get params
    ['chatId' => $chatId] = $params;

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

// @desc    Delete a message
// @access  Private
// @body    {}
// @return  message
$app->delete('/api/message/{messageId}', function ($request, $response, $params) {
  try {
    // db connection
    $db = new DB;
    $conn = $db->connect();

    // get current user id
    $userId = $request->getAttribute('user');

    // destructuring to get params
    ['messageId' => $messageId] = $params;

    // find message by id
    $sql = "SELECT * FROM messages WHERE id = '$messageId';";

    // perform the query
    $result = $conn->query($sql);

    // fetch sender id
    $senderId = $result->fetch_assoc()['sender_id'];

    // check if user has rights to delete the message
    if ($userId !== $senderId) throw new Exception('No rights to delete the message');

    // send a message
    $sql = "DELETE FROM messages WHERE id = '$messageId';";

    // perform the query
    $conn->query($sql);

    // return result
    return $response->withJson('Message deleted');
  } catch (Exception $error) {
    return $response->withJson($error->getMessage(), 500);
  }
})->add($private);
