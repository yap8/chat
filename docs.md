
# Documentation
Documentation for [chat](https://github.com/yap8/chat) repository

## Backend

### DB structure

- **users**
    - **id**
    - **name**
    - **slug**
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
