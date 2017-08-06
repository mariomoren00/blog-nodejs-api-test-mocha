"use strict"

 var assert = require('assert');
 var request = require('supertest')
 var app = require('../libs/app.js')

 var request = request("http://localhost:3000")

 describe('posts', function() {
     describe('GET', function(){
         it('Should return json as default data format', function(done){
             request.get('/api/v1/posts')
                 .expect('Content-Type', /json/)
                 .expect(200, done);
         });
         it('Should return json as data format when set Accept header to application/json', function(done){
             request.get('/api/v1/posts')
                 .set('Accept', 'application/json')
                 .expect('Content-Type', /json/)
                 .expect(200, done);
         });
     });
     describe('POST', function(){
         it('Should return 201 status code and location header', function(done){

             let post = {
                            name: "Mocha and Chai"
                          }

             request.post('/api/v1/posts')
                 .send(post)
                 .expect(201)
                 .expect('Location', '/api/v1/posts/4',done);
         });
     });
 });
