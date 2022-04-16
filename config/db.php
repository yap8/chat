<?php

class DB {
  private $host = 'localhost';
  private $user = 'root';
  private $pass = '';
  private $dbName = 'messenger';

  public function connect() {
    $conn = new mysqli($this->host, $this->user, $this->pass, $this->dbName);

    return $conn;
  }
}
