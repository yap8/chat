
# Messenger

Fullstack messenger application built with React & PHP

## Table of contents

- [Messenger](#messenger)
  - [Table of contents](#table-of-contents)
  - [Tech Stack](#tech-stack)
  - [Features](#features)
  - [Screenshots](#screenshots)
  - [Run Server Locally](#run-server-locally)
  - [Run Client Locally](#run-client-locally)
  - [Authors](#authors)
  - [Documentation](#documentation)

## Tech Stack

**Client:** [React](https://reactjs.org/), [Redux](https://redux.js.org/), [Tailwind CSS](https://tailwindcss.com/),

**Server:** [PHP](https://www.php.net/), [MySQL](https://www.mysql.com/) (MySQLi), [Slim](https://www.slimframework.com/)

**Other:** [JWT](https://jwt.io/), [Postman](https://www.postman.com/), [npm](https://www.npmjs.com/), [Composer](https://getcomposer.org/)

## Features

- Authorization & authentication
- Messages between two users
- Light and dark theme
- Custom backgrounds

## Screenshots

![Login](https://postimg.cc/5j3DMvbg "Login")
![Register](https://postimg.cc/4mxq4d3g "Register")
![Error handling](https://postimg.cc/hXJYx5xZ "Error handling")
![Home](https://postimg.cc/LnQ7JpqZ "Home")
![Search](https://postimg.cc/qN95GxxJ "Search")
![Messaging](https://postimg.cc/vgv2bFFT "Messaging")
![Settings](https://postimg.cc/gw8BtLgv "Settings")
![Backgrounds](https://postimg.cc/Q9DY2Nzv "Backgrounds")
![Dark theme](https://postimg.cc/N2fJ0JB4 "Dark theme")
![Redux](https://postimg.cc/Z0VsQSxD "Redux")

## Run Server Locally

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

<VirtualHost *:80>
    DocumentRoot "D:/xampp/htdocs/messenger/public"
    ServerName localhost
</VirtualHost>
```

Start the server

## Run Client Locally

Go to the client directory

```bash
  cd client
```

Install dependencies

```bash
  npm i
```

Start the server

```bash
  npm start
```

## Authors

- [Arseny Nebozhenko](https://github.com/yap8)
- [Bogdan Objilean](https://github.com/Bodea0001)

## Documentation
[Documentation](https://docs.google.com/document/d/1Sj9O9VG-3JCUWKqGXQ3qXcUCj3VESROB30O5tMx-igg/edit?usp=sharing)
