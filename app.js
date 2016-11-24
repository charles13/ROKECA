/*eslint-env node, jquery, browser*/

//------------------------------------------------------------------------------
// node.js starter application for Bluemix
//------------------------------------------------------------------------------

// This application uses express as its web server
// for more info, see: http://expressjs.com
var express = require('express');
var cfenv = require('cfenv');

// create a new express server
var app = express();
// serve the files out of ./public as our main files
app.use(express.static(__dirname + '/public'));
// get the app environment from Cloud Foundry
var appEnv = cfenv.getAppEnv();
// start server on the specified port and binding host
app.listen(appEnv.port, '0.0.0.0', function() {
  // print a message when the server starts listening
  console.log("server starting on " + appEnv.url);
});

// Part Above is the webserver section DO NOT TOUCH - 

//CODE

var main = function(){
    $('.icon-menu').click(function(){
        $('.menu').animate({
            left:'0px'
        },200);
                    
        });
    $('.icon-close').click(function(){
        $('.menu').animate({
            left:"-285px"
        },200);
   
    });
    
    
};