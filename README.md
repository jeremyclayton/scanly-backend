
# Server
## Scanly

This project video is live at (https://www.scanly.firebaseapp.com).

Scanly is the optimum product guide for outdoor gear reviewed and compared by you. Discover all outdoor gear specifications and reviews. For this project I paired with emage skate shop in Denver, CO.

You can start by scanning one or more products in the retail store, searching for any product, or just browse all of the avaliable products by category. By simply scanning a barcode you will retrieve all the revelvant information on that particalar item. You can also leave reviews in a easy to use rating system that will upvote or downvote the gear. 


### Installing
NOTE: You will need to clone both this client repo and the server repo at ()

* Fork and clone this repo
* `$ cd` into the folder and `$ npm install`
* Create a PSQL database named `scanly`
* Run `$ knex migrate:latest` and `$ knex seed:run`
* See the `example.env` file for needed Environment variables
  * Don't forget to create your own `.env` file with your project's specific Environment variables
* Create a Google OAuth account for authorization
* Launch nodemon on the server with `$ nodemon` from the root of the sever repo
* Launch an http-server with `$ http-server` from the root of the client repo
* When this is all ready, visit http://localhost:4200 from your browser to launch the landing page
