# RedditLike

## 1. Requirement

1.functions<br/>
2.in-memory data structure<br/>
3.tests<br/>
4.comments and documentation for key functionalities<br/>
5.deployed online to a free hosting platform such as Heroku<br/>
6.backend program<br/>

## 2. Run this application
(1) Switch to backend branch<br>
(2) run `npm install`<br>
(3) run `npm start`<br>

## 3. Design
<b>Q</b>: Why I choose Angular?<br>
<b>A</b>: 1. It is easier to implement a lightweight application with Angular comparing with Java. 2. As there is no need for data persistence, this application can be designed as a total front-end application without database. 3. Maybe I am more familiar with Java, but if I find some technologies more suitable for my task, I would love to learn it. It won't satisfy me just to complete the work.<br>

<b>Q</b>: How this application is designed?<br>
<b>A</b>: Basically there are two main components contained in the front-end application. One is the app component, which includes the form used for creating new topic and a topic list. Another is the topic component. Each topic maps to a topic component. The back-end programme is implemented with Express framework (the file name is server.js). Basically there are four request handler functions included.<br>

## 4. API
1.newTopic()
- request:
    - url: "/newtopic"
    - method: post
    - params: [title: string]
- response:
    - format: json
    - example: 
    ```
    {
        "status" : "true"
    }
    ```

2.getTopics()
- request:
    - url: "/topics"
- response:
    - format: json
    - example:
    ```
    {
        "length" : "10",
        "order" : "desc",
        "items" : 
        [
            {
                "id" : "1",   
                "title" : "hello world",
                "votes" : "3"
            },
            {
                "id" : "2",
                "title" : "I like Carousell",
                "votes" : "99"
            }
        ]
    }
    ```

3.voteById()
- request:
    - url: "/votes"
    - method: get
    - params: [id: number, type: number   // type's value is either 1 or -1, 1 for upvote, -1 for downvote
- response: 
    - format: json
    - example: 
    ```
    {
        "id" : "1",   
        "status" : "true"
    }
    ```
## 5. Test

I used Karma and Jasmine to test the angular application. There are two test files in /src/app/services which end with .spec.ts.

## 6. Deployment

This application has been deployed to Heroku with the link https://redditlike.herokuapp.com/



