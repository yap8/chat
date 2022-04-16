
# Messenger

Fullstack messenger application built with React & PHP

## Table of contents

- [Messenger](#messenger)
  - [Table of contents](#table-of-contents)
  - [Tech Stack](#tech-stack)
  - [Features](#features)
  - [Run Locally](#run-locally)
  - [Authors](#authors)
  - [Documentation](#documentation)

## Tech Stack

**Client:** [React](https://reactjs.org/), [Redux](https://redux.js.org/), [Tailwind CSS](https://tailwindcss.com/), [npm](https://www.npmjs.com/)

**Server:** [PHP](https://www.php.net/), [MySQL](https://www.mysql.com/) (MySQLi), [Slim](https://www.slimframework.com/), [Composer](https://getcomposer.org/)

## Features

- Authorization & authentication
- Messages between two users
- Rooms with multiple users

## Run Locally

Clone the project

```bash
  git clone https://github.com/yap8/messenger.git
```

Go to the project directory

```bash
  cd messenger
```

Install dependencies

```bash
  composer install
```

Add these lines to `httpd-vhosts.conf` in your apache config folder
```bash
NameVirtualHost *:80

<VirtualHost *:80>
    DocumentRoot "D:/xampp/htdocs/messenger/public"
    ServerName localhost
</VirtualHost>
```

Start the server

## Authors

- [Arseny Nebozhenko](https://github.com/yap8)
- [Bogdan Objilean](https://github.com/Bodea0001)

## Documentation
[Documentation](https://docs.google.com/document/d/1Sj9O9VG-3JCUWKqGXQ3qXcUCj3VESROB30O5tMx-igg/edit?usp=sharing)
