"use strict"

 var assert = require('assert');
 var request = require('supertest')
 var app = require('../libs/app.js')

 var request = request("http://localhost:3000")

 describe('users', function() {
     describe('GET', function(){
         it('Should return json as default data format', function(done){
             request.get('/api/v1/users')
                 .expect('Content-Type', /json/)
                 .expect(200, done);
         });
         it('Should return json as data format when set Accept header to application/json', function(done){
             request.get('/api/v1/users')
                 .set('Accept', 'application/json')
                 .expect('Content-Type', /json/)
                 .expect(200, done);
         });
     });
     describe('POST', function(){
         it('Should return 201 status code and location header', function(done){

             let user = {
                            name: "Julian Mons",
                            email: "email@gmail.com",
                            password: "123456"
                          }

             request.post('/api/v1/users')
                 .send(user)
                 .expect(201)
                 .expect('Location', '/api/v1/users/4',done);
         });
     });
 });
