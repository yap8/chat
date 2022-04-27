<?php

// slim
use Slim\Factory\AppFactory;

require __DIR__ . '/vendor/autoload.php';
require __DIR__ . '/config/db.php';

$app = AppFactory::create();

// middleware
require __DIR__ . '/middleware/private.php';

// routes
require __DIR__ . '/routes/userRoutes.php';
require __DIR__ . '/routes/homeRoutes.php';
require __DIR__ . '/routes/chatRoutes.php';
require __DIR__ . '/routes/messageRoutes.php';

// serve client
$app->get('/{path:.*}', function($request, $response, $args) {
  $file = __DIR__ . '/index.html';

  return $response->write(file_get_contents($file));
});

$app->run();
