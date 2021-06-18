'use strict'

var express = require('express');
var app = express.Router();
var call = require('../functions');
var mysql = require('mysql');


// TX //

// TRANSACTION BODY
// const transaction = {
//   "txID" : "12694266"
//   "NID"  : "1368428",
//   "ClientID" : "123",
//   "type" : "Business",
//   "Destination" : "12394484", //Destination: ClientID
//   "amount" : "1297",  //DT
//   "Date_operation" : "02/08/2021"
//   "Libelle" : ""
// }


app.get('/Tx', function (req, res) {
  const  type = "SELECT";
  const sql = 'SELECT * FROM Bus_Tx WHERE ClientID =  ' + mysql.escape(req.body.ClientID) + ' AND txID = ' + req.body.txID;
  const data = [type, sql];

  call.Extrait(data, function(err, rows) {
    if (!err) {
      res.send(rows);
    }
    else {
      res.send(err);
    }
  })

  
});


app.post('/Add_tx', function (req, res) {
  const type = "INSERT";
  var values = [[req.body.ClientID, req.body.txID, req.body.NID, req.body.Libelle, req.body.Date_operation, req.body.amount]];
  const sql = 'INSERT INTO Bus_Tx (ClientID, txID , NID,  Libelle, Date_operation, amount) VALUES ?'; 
  const data = [type, sql, values];

  call.Extrait(data, function(err, rows) {
    if (!err) {
      res.send(rows);
    }
    else {
      res.send(err);
    }
  })
});



// ACCOUNT //

// ACCOUNT BODY
// const account = {
//   "ClientID" : "12694266",
//   "NID"  : "1368428",
//   "Name" : "1ol23",
//   "Lastname" : "Busii",
//   "Job" : "12394484",
//   "Date_operation" : "02/08/2021"
// }


app.get('/Account', function (req, res) {
  const  type = "SELECT";
  const sql = 'SELECT * FROM Bus_Accounts WHERE ClientID =  ' + mysql.escape(req.body.ClientID);
  const data = [type, sql];

  call.Extrait(data, function(err, rows) {
    if (!err) {
      res.send(rows);
    }
    else {
      res.send(err);
    }
  })
});



app.post('/account', function (req, res) {
  const type = "INSERT";
  var values = [[req.body.ClientID, req.body.NID, req.body.Name, req.body.Lastname, req.body.Job, req.body.Date_operation]];
  const sql = 'INSERT INTO Bus_Accounts (ClientID, NID , Name,  Lastname, Job, Date_operation) VALUES ?'; 
  const data = [type, sql, values];

  call.Extrait(data, function(err, rows) {
    if (!err) {
      res.send(rows);
    }
    else {
      res.send(err);
    }
  })
  
});
    
    








module.exports = app;
