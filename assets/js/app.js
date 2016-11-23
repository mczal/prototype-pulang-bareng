var beirutApp = angular.module('beirutApp', [
    'ngRoute',
    'securityController'
]);

beirutApp.config(['$routeProvider','$locationProvider','$httpProvider',
    function($routeProvider,$locationProvider,$httpProvider){
      $httpProvider.defaults.useXDomain = true;
      delete $httpProvider.defaults.headers.common['X-Requested-With'];
        $routeProvider.
      when('/pulang-bareng', {
        'templateUrl': 'partials/landing-pulang-bareng.html',
        'controller': 'landingPulangBarengController.ctrl'
      }).
      when('/profile', {
        'templateUrl': 'partials/profile.html',
        'controller': 'profileController.ctrl'
      }).
      when('/create-room', {
        'templateUrl': 'partials/create-room.html',
        'controller': 'createRoomController.ctrl'
      }).

      when('/pulang-bareng-join', {
        'templateUrl': 'partials/pulang-bareng-join.html',
        'controller': 'landingPulangBarengController.ctrl'
      }).
      when('/pulang-bareng-detail', {
        'templateUrl': 'partials/pulang-bareng-detail.html',
        'controller': 'pulangBarengDetailController.ctrl'
      }).
      when('/pulang-bareng-room', {
        'templateUrl': 'partials/pulang-bareng-room.html',
        'controller': 'pulangBarengRoomController.ctrl'
      }).
      when('/pulang-bareng-room-join', {
        'templateUrl': 'partials/pulang-bareng-room-join.html',
        'controller': 'pulangBarengRoomController.ctrl'
      }).
      when('/pulang-bareng-room-detail', {
        'templateUrl': 'partials/pulang-bareng-room-detail.html',
        'controller': 'pulangBarengRoomController.ctrl'
      }).
      when('/exclusive-bodyguard', {
        'templateUrl': 'partials/landing-exclusive-bodyguard.html',
        'controller': 'landingExclusiveBodyguardController.ctrl'
      }).
	  when('/exclusive-bodyguard-create', {
        'templateUrl': 'partials/landing-exclusive-bodyguard-create.html',
        'controller': 'landingExclusiveBodyguardCreateController.ctrl'
      }).
      when('/events', {
        'templateUrl': 'partials/landing-events.html',
        'controller': 'landingEventsController.ctrl'
      }).
      when('/landing-event-meeting', {
        'templateUrl': 'partials/landing-event-meeting.html',
        'controller': 'landingEventsController.ctrl'
      }).
      when('/landing-event-paid', {
        'templateUrl': 'partials/landing-event-paid.html',
        'controller': 'landingEventsController.ctrl'
      }).
      when('/create-event', {
        'templateUrl': 'partials/create-event.html',
        'controller': 'createEventController.ctrl'
      }).
      when('/my-history', {
        'templateUrl': 'partials/landing-my-history.html',
        'controller': 'landingMyHistoryController.ctrl'
      }).
	  when('/my-history-bodyguard', {
        'templateUrl': 'partials/landing-my-history-bodyguard.html',
        'controller': 'landingMyHistoryBodyguardController.ctrl'
      }).
	  when('/my-history-event', {
        'templateUrl': 'partials/landing-my-history-event.html',
        'controller': 'landingMyHistoryEventController.ctrl'
      }).
	  when('/landing-friend', {
        'templateUrl': 'partials/landing-friend.html',
        'controller': 'landingFriendController.ctrl'
      }).
	  when('/landing-friend-add', {
        'templateUrl': 'partials/landing-friend-add.html',
        'controller': 'landingFriendAddController.ctrl'
      }).
      otherwise({
        'redirectTo': '/pulang-bareng'
      });
    }]);
