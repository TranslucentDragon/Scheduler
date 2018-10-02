const fs = require('fs');
const express = require('express');
const page = express();

// express
page.set('views', './Views');
page.set('view engine', 'pug');

app.get('/', function (req, res) {
  res.render('msgScreen');
})

// angular
const app = angular.module("SchedulerMessage", []);

  // background changes
app.controller("BackgroundController", function($interval) {
/*   let red = "7F";
  let green = "DA";
  let blue = "FF";
  $interval(function(red, green, blue) {
    blue
    backgroundColorFunc(red + green + blue)
  }, 20); */
});

// message changes
app.controller("MessageController", function($scope, $interval) {
  let transitionInfo = fs.createReadStream('../Data/message.json');
  transitionInfo.on('data', (chunk) => {
    const transitionObject = JSON.parse(chunk);
  });
  let messageJSON = fs.createReadStream('../Data/message.json');
  messageJSON.on('data', (chunk) => {
    const object = JSON.parse(chunk);
    const messagesArray = object.Messages;
  });
  let count = 0;
  $interval(function() {
    $scope.message = messagesArray[count % 4];
    count += 1;
  }, transitionObject.Sleep * 1000);
});
