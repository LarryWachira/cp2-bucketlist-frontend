# ChumFrontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

EndPoint  Functionality
POST api/v1/auth/login  Logs a user in
POST api/v1/auth/register Register a user
POST api/v1/bucketlists/  Create a new bucket list
GET api/v1/bucketlists/ List all the created bucket lists
GET api/v1/bucketlists/<id> Get single bucket list
PUT api/v1/bucketlists/<id> Update this bucket list
DELETE api/v1/bucketlists/<id>  Delete this single bucket list
POST api/v1/bucketlists/<id>/items/ Create a new item in bucket list
PUT api/v1/bucketlists/<id>/items/<item_id> Update a bucket list item
DELETE api/v1/bucketlists/<id>/items/<item_id>  Delete an item in a bucket list

