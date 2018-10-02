
// angular
const app = angular.module('Messenger', ['ngMaterial', 'ngAnimate']);

  // background changes
app.controller("BackgroundController", ['$scope', '$interval', function($scope, $interval) {
  $scope.sideNav = false;
  $scope.reverseValue = (bool) => {
    if(bool) {
      bool = false;
    } else {
      bool = true;
    }
  }

/*   let red = "7F";
  let green = "DA";
  let blue = "FF";
  $interval(function(red, green, blue) {
    blue
    backgroundColorFunc(red + green + blue)
  }, 20); */
}]);

// message changes
app.controller("MessageController", ['$scope', '$interval', function($scope, $interval) {
 /*  let transitionInfo = fs.createReadStream('/Data/message.json');
  transitionInfo.on('data', (chunk) => {
    const transitionObject = JSON.parse(chunk);
  });
  let messageJSON = fs.createReadStream('../Data/message.json');
  messageJSON.on('data', (chunk) => {
    const object = JSON.parse(chunk);
    const messagesArray = object.Messages;
  }); */
  let messageArray = ["This is the first message", "This is the second message",
    "This is the fourth message... or is it???", "This is the fourth message, for real tho"]
  let count = 0;
  $interval(function() {
    $scope.message = messageArray[count % 4];
    count += 1;
  },  1000);
}]);
