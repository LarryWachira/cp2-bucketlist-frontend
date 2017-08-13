# Chum Frontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.2.

Chum is a bucket list app built with a flask backend and Angular 2 frontend. A live demo can be found [here](https://chum-bucket.herokuapp.com/welcome).

### Obligatory screenshots:
#
#### _Landing page_
![alt text](http://i.imgur.com/kDNBzMH.png "Landing page")
_______
#### _Bucket lists_
![alt text](http://i.imgur.com/VsYY6lE.png "Bucket lists")
_______
#### _Bucket list items_
![alt text](http://i.imgur.com/JcI4JxR.png "Items")
_______



## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/` to view the result. The app will automatically reload if you change any of the source files.

## Production server
Run `ng serve -prod` for a production server.

## Installation
Ensure you have [Node](https://nodejs.org/) installed. You can get it from their website or install via [Homebrew](https://brew.sh) package manager for MacOS.
Install angular cli first. It's not mandatory but it's recommended in case you'd like to extend the apps capabilities:
    
    $ npm install -g @angular/cli

Next, install all of the apps dependencies by running:
    
    $ npm install

The final step is the easiest :) :
    
    $ ng serve -prod

_NOTE: Chum's front end needs to be connected to a valid Chum [API server](https://github.com/LarryWachira/cp2-bucket-list) to work._

### TODO:
- Add the ability for users to add custom bucket list card images
- Add more dashboard content statistics
- Add tests
- reduce code repetition
