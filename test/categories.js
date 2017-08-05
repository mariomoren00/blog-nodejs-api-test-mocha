"use strict"

 var assert = require('assert');
 var request = require('supertest')
 var app = require('../libs/app.js')

 var request = request("http://localhost:3000")

 describe('categories', function() {
     describe('GET', function(){
         it('Should return json as default data format', function(done){
             request.get('/api/v1/categories')
                 .expect('Content-Type', /json/)
                 .expect(200, done);
         });
         it('Should return json as data format when set Accept header to application/json', function(done){
             request.get('/api/v1/categories')
                 .set('Accept', 'application/json')
                 .expect('Content-Type', /json/)
                 .expect(200, done);
         });
     });
     describe('POST', function(){
         it('Should return 201 status code and location header', function(done){

             let category = {
                            name: "Mocha and Chai"
                          }

             request.post('/api/v1/categories')
                 .send(category)
                 .expect(201)
                 .expect('Location', '/api/v1/categories/4',done);
         });
     });
 });
