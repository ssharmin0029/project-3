# MyCoin

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Table of Contents

- [User Story](#User-Story)
- [Demo-Screenshots of the App](#Demo-Screenshots-of-the-App)
- [Deployed Application URL](#Deployed-Application-URL)
- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [Navigating the Repository](#Navigating-the-Repository)
- [Technologies Used](#Technologies-Used)

## User Story.

```
As a cryptocurrency investor and trader, I want to be able to track all my crypto investments in one place So that I don’t waste time logging into all my accounts to keep track of this manually
```

### Demo-Screenshots of the App

![alt text](public/images/final-page-1.png)
![alt text](public/images/final-page-2.png)
![alt text](public/images/final-page-3.png)
![alt text](public/images/final-page-4.png)
![alt text](public/images/final-page-5.png)

### Deployed Application URL

[MyCoin](https://my-coin-app-deployed.herokuapp.com)

## Description

## Installation

Given you already have Node.js and MySQL Workbench installed on your computer, clone the repository on your local machine. On your local repository, create a .env file that contains

```
DB_NAME=coin_db
DB_USER="YourInfo"
DB_PASSWORD="YourPassword"
```

Then open the terminal and naviagte to your local repo. Run this command from the root level to install all dependencies for both the client and server.

```
npm i or npm install
```

## Usage

Next open MySQL Workbench and run these lines of code

```
DROP DATABASE IF EXISTS coin_db;
CREATE DATABASE coin_db;

USE coin_db;
```

Lastly go back to the terminal and run this command to start the server.

```
npm start
```

By default the client side runs on localhost:3000. You can type the following line on your browser to navigate to the server side locally.

```
localhost:8000
```

## Navigating the Repository

Once you open the repository, you will find

- front-end folders/files:

  - client
    - public
    - src
      - Utils
      - assets
      - components
      - pages
      - App.js
      - index.css
      - index.js
    - .gitignore
    - README.md for React App
    - package-lock.json
    - package.json

- Back-end folders/files:

  - config
  - db
  - models
  - routes
  - seeds
  - utils
  - .gitignore
  - package.lock.json
  - package.json
  - server.js

  - Others
    - .vscode
    - .prettier
    - ProjectGuide.md
    - README.md

## Technologies Used

- Node
- Express
- React
- Express-sessions
- Sequelize
- MySQL
- MySQL Workbench
- dotnev
- Bcrypt
- Axios
- Uizard
- Threejs
- Chartjs
- Coingecko API
- Mediastack News API
- Bootstrap
- Heroku

Copyright (c) [2021] [Justin Ng, Sabrina Sharmin, Josh Soto, Steven Stefanov]
