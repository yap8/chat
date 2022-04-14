
# Documentation

Documentation for [chat](https://github.com/yap8/chat) repository

## Table of contents

- [Backend](#backend)
  - [DB structure](#db-structure)
  - [Routes](#routes)
    - [Users](#users)

## Backend

### DB structure

- **users**
    - **id**
    - **name**
    - **username**
    - **email**
    - **password**
    - **avatar**
- **rooms**
    - **id**
    - **name**
    - **slug**
- **members**
    - **id**
    - **userId**
    - **roomId**
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
    - Edit user's data i.e. **name**, **username**, **avatar**, **password**
    - Private
