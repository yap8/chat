<?php

// slim
use Slim\Factory\AppFactory;

require __DIR__ . '/../vendor/autoload.php';
require __DIR__ . '/../config/db.php';

$app = AppFactory::create();

// routes
require __DIR__ . '/../routes/userRoutes.php';
require __DIR__ . '/../routes/homeRoutes.php';

$app->run();
