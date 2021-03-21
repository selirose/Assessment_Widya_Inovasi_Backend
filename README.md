# User Application for Widya Inovasi Indonesia

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger) [![npm version](https://img.shields.io/npm/v/react.svg?style=flat)](https://www.npmjs.com/package/react) ![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)

The project is to create web-based application to provide user registration, login and get the profile using NodeJS with Authentication and Authorization by JWT

## Setting Prerequisites

This project require [NodeJS](https://nodejs.org/) to run

To install:

$ git clone https://github.com/selirose/Assessment_Widya_Inovasi_Backend

$ cd Assessment_Widya_Inovasi_Backend

$ npm install or yarn install

$ npm start or yarn start


## Backend Dependencies

The framework and packages used are listed below:

- [express](https://www.express.com/)
- [mongoose](https://mongoosejs.com)
- [passport](www.passportjs.org)
- [bcrypt](https://www.npmjs.com/package/bcrypt)
- [dotenv](https://www.npmjs.com/package/dotenv)

NOTE: please open .example.env file to access the environment variable

## Deployment

This project is deployed to Heroku web server, you can access all of the API below:

- [Widya Assessment Heroku](https://widya-assessment-seli.herokuapp.com/)

## Documentation

The documentation for this project can be found here and if you use [Postman](https://www.getpostman.com/) you can directly run all of the API within the environment. I also made the example for success and failure cases such as e.g. email has been registered, wrong password, not authorized to see other's profile etc.

Please open or run this file to see all covered cases:

- [Widya Assessment Documentation](https://documenter.getpostman.com/view/13706159/Tz5wVtj8)

SAMPLE for success cases,

![Successfully Logged in](https://res.cloudinary.com/idrusmhc/image/upload/v1616315299/seli/Login_Success_axb5hp.png)

![Successfully View Profile](https://res.cloudinary.com/idrusmhc/image/upload/v1616315299/seli/Profile_Success_vbnekd.png)

## License

Copyright 2021 Seli Rosriana

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.