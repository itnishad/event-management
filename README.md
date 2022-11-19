<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

# REST API
The REST API for the example app is described below.
## Get all active event list
### Request
`GET /event/list?page=1`
### Response

    HTTP/1.1 200 OK
    Date: Sat, 19 Nov 2022 05:53:01 GMT
    Status: 200 OK
    Connection: keep-alive
    Content-Type: application/json
    Content-Length: 314

    {
      "events": [
          {
            "id": 5,
            "title": "Job Market Essentials",
            "start_at": "2022-11-10T06:59:01.000Z",
            "end_at": "2022-11-18T06:59:01.000Z"
          },
          {
            "id": 6,
            "title": "BITPA Conference 2022",
            "start_at": "2022-11-12T06:59:01.000Z",
            "end_at": "2022-11-25T06:59:01.000Z"
          }
      ],
      "pagination": {
          "total": 10,
          "per_page": 10,
          "total_pages": 1,
          "current_page": 1
      }
   }


### Request
`GET /event/:eventId`

### Response

    HTTP/1.1 200 OK
    Date: Sat, 19 Nov 2022 05:32:44 GMT
    Status: 200 OK
    Connection: keep-alive
    Content-Type: application/json
    Content-Length: 123

    {
      "id": 1,
      "title": "Demo Event",
      "start_at": "2022-11-05T06:59:01.000Z",
      "end_at": "2022-11-10T06:59:01.000Z",
      "total_workshops": 3
    }

### Request
`GET /event?eventId=1`

### Response

    HTTP/1.1 200 OK
    Date: Sat, 19 Nov 2022 05:53:01 GMT
    Status: 200 OK
    Connection: keep-alive
    Content-Type: application/json
    Content-Length: 270

    {
      "id": 1,
      "title": "Demo Event",
      "start_at": "2022-11-05T06:59:01.000Z",
      "end_at": "2022-11-10T06:59:01.000Z",
      "workshops": [
        {
            "id": 3,
            "start_at": "2022-11-25T06:59:01.000Z",
            "end_at": "2022-11-28T06:59:01.000Z",
            "title": "ReTest Workshop",
            "description": "ReTest Workshop description"
        }
      ]
    }

### Request
`GET /workshop/:workshopId`

### Response

    HTTP/1.1 200 OK
    Date: Sat, 19 Nov 2022 05:52:36 GMT
    Status: 200 OK
    Connection: keep-alive
    Content-Type: application/json
    Content-Length: 171

    {
      "id": 1,
      "title": "Demo Workshop",
      "description": "Demo Workshop description",
      "start_at": "2022-11-05T06:59:01.000Z",
      "end_at": "2022-11-05T06:59:01.000Z",
      "total_reservations": 1
    }

### Request
`POST /reservation/:workshopId`

### Response

    HTTP/1.1 201 Created
    Date: Sat, 19 Nov 2022 05:05:41 GMT
    Status: 201 Created
    Connection: keep-alive
    Content-Type: application/json
    Content-Length: 343

    {
      "reservation": {
          "id": 2,
          "name": "Faysal",
          "email": "faysal@gmail.com"
      },
      "event": {
          "id": 1,
          "title": "Demo Event",
          "start_at": "2022-11-05T06:59:01.000Z",
          "end_at": "2022-11-10T06:59:01.000Z"
      },
      "workshop": {
          "id": 3,
          "title": "ReTest Workshop",
          "description": "ReTest Workshop description",
          "start_at": "2022-11-25T06:59:01.000Z",
          "end_at": "2022-11-28T06:59:01.000Z"
      }
    }


## Status Codes

App returns the following status codes in its API:

| Status Code | Description |
| :--- | :--- |
| 200 | `OK` |
| 201 | `CREATED` |
| 400 | `BAD REQUEST` |
| 404 | `NOT FOUND` |
| 500 | `INTERNAL SERVER ERROR` |


## Stay in touch

- Author - Faysal Hasan
- GitHub - [@itnishad](www.github.com/itnishad)
- LinkedIn - [@itnishad](www.linkedin.com/in/itnishad)


