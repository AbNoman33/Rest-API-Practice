<img src="./public/images/nature02.jpeg">

## Rest API with Express Server


This is my first REST API for React js App.

## First clone this repo and then install it's packages

``` console
$ npm install 
```

## Server Structure

```js

const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();

// init environment variable 
const PORT = process.env.PORT || 8080;

//express inti
const app = express();

//express middlewares
app.use(express.json());
app.use(express.urlencoded({extended : false}) );

//listen port 
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`.bgGreen.black);
});

```

## Packages

* Express Js
* Nodemon
* Colors
* dotenv
* multer
* nodemailer

## Live Project Link
[Education Board Result](http://www.educationboardresults.gov.bd/)