
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

![Login](https://i.postimg.cc/vHFyfLKJ/1.jpg "Login")
![Register](https://i.postimg.cc/xTv2RNDc/2.jpg "Register")
![Error handling](https://i.postimg.cc/CxJVyyK0/3.jpg "Error handling")
![Home](https://i.postimg.cc/6pBN16tz/4.jpg "Home")
![Search](https://i.postimg.cc/MGTJqscQ/5.jpg "Search")
![Messaging](https://i.postimg.cc/9M66PCLd/6.jpg "Messaging")
![Settings](https://i.postimg.cc/tgMQThPm/7.jpg "Settings")
![Backgrounds](https://i.postimg.cc/sXGFZv4f/8.jpg "Backgrounds")
![Dark theme](https://i.postimg.cc/7hSpmdRp/9.jpg "Dark theme")
![Redux](https://i.postimg.cc/Fs4t7Fdm/10.jpg "Redux")

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
