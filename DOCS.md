
# Documentation

Documentation for [chat](https://github.com/yap8/chat) repository

## Table of contents

- [Documentation](#documentation)
  - [Table of contents](#table-of-contents)
  - [Backend](#backend)
    - [DB structure](#db-structure)
    - [Routes](#routes)
      - [Users](#users)
      - [Rooms](#rooms)

## Backend

### DB structure

- **users**
    - **id**
    - **name**
    - **username**
    - **email**
    - **password**
    - **avatar**
- **conversations**
    - **id**
- **rooms**
    - **id**
    - **name**
    - **slug**
- **members**
    - **id**
    - **userId**
    - **roomId**
    - **conversationId**
- **messages**
    - **id**
    - **userId**
    - **roomId**
    - **content**
    - **createdAt**

### Routes

#### Users

- GET /api/users/:id
    - Get user's **name**, **username**, **avatar** and other info
    - Private

- POST /api/users/register
    - Register a new user
    - Public
    
- POST /api/users/login
    - Authenticate a user (send a JWT)
    - Public

- PATCH /api/users/edit
    - Edit user's data: **name**, **username**, **avatar**, **password**
    - Private

#### Rooms

- GET /api/rooms
    - Get list of rooms the user is a **member** of
    - Private
    
- GET /api/rooms/:id
    - Get room's **title** and list of **members**
    - Private
    
- POST /api/rooms
    - Create a room
    - Private
    
- DELETE /api/rooms/:id
    - Delete a room
    - Private
