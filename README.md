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
## Get All Active Event List
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

## Single Event Details Information
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

## Single Active Workshops in an Event
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


## Single Workshop Details Information
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

## Create a Workshop Reservation for a User
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

## Create A Event
### Request
`POST /event`

### Response
    {
      "title": "Yorokobi Utshab",
      "start_at": "2022-11-23T06:59:01.107Z",
      "end_at": "2022-11-24T06:59:01.107Z",
      "id": 10
    }

## Create A Workshop
### Request
`POST /workshop/:eventId`

### Response
    {
      "title": "Test Workshop for event 2",
      "description": "Test Workshop description for event 2",
      "start_at": "2022-11-25T06:59:01.107Z",
      "end_at": "2022-11-28T06:59:01.107Z"
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


