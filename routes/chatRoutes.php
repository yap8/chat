<?php

// environment variables
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__ . '/..');
$dotenv->load();

// jwt
use Firebase\JWT\JWT;
use Firebase\JWT\Key;

// @desc    Create a chat
// @access  Private
// @body    { participantId }
// @return  message
$app->post('/api/chats', function ($request, $response) {
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
    ['participantId' => $participantId] = $data;

    // get name of current user
    $sql = "SELECT name FROM users WHERE
            id = '$userId'";

    // perform the query
    $result = $conn->query($sql);

    // get the name
    $userName = $result->fetch_assoc()['name'];

    // create a chat
    $sql = "INSERT INTO chats(title, creator_id)
            VALUES ('$userName\'s chat', '$userId')";

    // perform the query
    $conn->query($sql);

    // get chat id
    $chatId = $conn->insert_id;

    // add participants
    $sql = "INSERT INTO participants (chat_id, user_id) VALUES ('$chatId', '$userId'), ('$chatId', '$participantId')";

    // perform the query
    $conn->query($sql);

    // return result
    return $response->withJson("Chat successfully created");
  } catch (Exception $error) {
    return $response->withJson($error->getMessage(), 500);
  }
})->add($private);

// @desc    Get list of chats the user is part of
// @access  Private
// @body    {}
// @return  Array of chats
$app->get('/api/chats', function ($request, $response) {
  try {
    // db connection
    $db = new DB;
    $conn = $db->connect();

    // get current user id
    $userId = $request->getAttribute('user');

    // find ids of chats the user is a participant of
    $sql = "SELECT * FROM participants WHERE
            user_id = '$userId'";

    // perform the query
    $result = $conn->query($sql);

    // get array of chat ids
    $ids = array_column($result->fetch_all(MYSQLI_ASSOC), 'chat_id');

    // find chats the user is participant of
    $sql = "SELECT * FROM chats WHERE";

    foreach ($ids as $key => $id) {
      if ($key === array_key_last($ids)) {
        $sql .= " id = '$id';";

        break;
      }

      $sql .= " id = '$id' OR";
    }

    // perform the query
    $result = $conn->query($sql);

    // return the array of chats
    return $response->withJson($result->fetch_all(MYSQLI_ASSOC));
  } catch (Exception $error) {
    return $response->withJson($error->getMessage(), 500);
  }
})->add($private);
