var express = require('express');
var path = require('path');
var url = require('url');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({
	extended: false
})
var db = require('./zzbsql');


