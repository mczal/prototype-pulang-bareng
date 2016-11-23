var securityController = angular.module('securityController', []);

securityController.controller('profileController.ctrl',['$scope', '$routeParams', '$http',
	function($scope,$routeParams,$http){

		$scope.topup = function(){
			swal({
			  title: "Topup Balance!",
			  text: "(Rp. ):",
			  type: "input",
			  showCancelButton: true,
			  closeOnConfirm: false,
			  animation: "slide-from-top",
			  inputPlaceholder: "50.000"
			},
			function(inputValue){
			  if (inputValue === false) return false;

			  if (inputValue === "") {
			    swal.showInputError("You need to write something!");
			    return false
			  }

			  swal("Continue to Transfer!", "Your amount of tranfer: " + inputValue+"\nPlease transfer to this account : \n BCA 12353124 SecurityLTD", "success");
			});
		}

		console.log('profileController.ctrl');
	}
]);

securityController.controller('createRoomController.ctrl',['$scope', '$routeParams', '$http',
	function($scope,$routeParams,$http){
		$scope.showSuccess = function(){
			swal("Success","your room now is available with initial knights number = 1","success");
		}
		console.log('createRoomController.ctrl');
	}
]);

securityController.controller('pulangBarengDetailController.ctrl',['$scope', '$location','$routeParams', '$http',
function($scope,$location,$routeParams,$http){

	$scope.pageHeader = "\"Pulang Bareng\"";




	$scope.rate = function(){
		swal({
		  title: "Rate US !",
		  text: "<link rel='stylesheet' href='../../bower_components/jquery-bar-rating/dist/themes/fontawesome-stars.css'> <script src='../../bower_components/jquery-bar-rating/dist/jquery.barrating.min.js'></script> <script type='text/javascript'> $(function() { $('#example').barrating({ theme: 'fontawesome-stars' }); }); </script>  <select id='example'><option value='1'>1</option><option value='2'>2</option><option value='3'>3</option><option value='4'>4</option><option value='5'>5</option></select>",
		  type: "info",
		  closeOnConfirm: false,
		  showLoaderOnConfirm: true,
			html: true
		},
		function(){
		  setTimeout(function(){
		    swal("Success!","Thank you for your feedback","success");
				// console.log("MAU");
				// $location.path('pulang-bareng-join');
		  }, 1000);
		});
	}

	// $scope.rate = function(){
	// 	swal({
	// 	  title: "HTML <small>Title</small>!",
	// 	  text: "A custom <span style="color:#F8BB86">html<span> message.",
	// 	  html: true
	// 	});
	// };

	$scope.joinNow = function(){
		swal({
		  title: "Join",
		  text: "Joining from checkpoint 2\nYour balance will be reduced by Rp. 5000,00\nYour balance remaining will be Rp. 23.000,00 ",
		  type: "info",
		  showCancelButton: true,
		  closeOnConfirm: false,
		  showLoaderOnConfirm: true,
		},
		function(){
		  setTimeout(function(){
				$location.path('pulang-bareng-join');
		    swal("Success!","Go to your room","success");
				console.log("MAU");
				$location.path('pulang-bareng-join');
		  }, 2000);
		});
	};

	console.log("pulangBarengDetailController.ctrl");
}]);

securityController.controller('pulangBarengRoomController.ctrl',['$scope', '$routeParams', '$http',
function($scope,$routeParams,$http){
	$scope.pageHeader = "\"Pulang Bareng\"";

	$scope.joinNow = function(){
		swal({
		  title: "Ajax request example",
		  text: "Submit to run ajax request",
		  type: "info",
		  showCancelButton: true,
		  closeOnConfirm: false,
		  showLoaderOnConfirm: true,
		},
		function(){
		  setTimeout(function(){
		    swal("Ajax request finished!");
		  }, 2000);
		});
	};

	console.log("pulangBarengRoomController.ctrl");
}]);

securityController.controller('landingEventsController.ctrl',['$scope', '$routeParams', '$http',
function($scope,$routeParams,$http){
	// $scope.pageHeader = "\"Pulang Bareng\"";
	console.log("landingEventsController.ctrl");
}]);

securityController.controller('createEventController.ctrl',['$scope', '$routeParams', '$http',
function($scope,$routeParams,$http){

	$scope.showSuccess = function(){
		swal("Success","your event has been submited. Please wait for confirmation","success");
	}
	// $scope.pageHeader = "\"Pulang Bareng\"";
	console.log("createEventController.ctrl");
}]);

securityController.controller('landingPulangBarengController.ctrl',['$scope', '$routeParams', '$http',
function($scope,$routeParams,$http){
	$scope.pageHeader = "\"Pulang Bareng\"";
	console.log("landingPulangBarengController.ctrl");
}]);

securityController.controller('landingExclusiveBodyguardController.ctrl',['$scope', '$routeParams', '$http',
	function($scope,$routeParams,$http){
		$scope.pageHeader = "\"Exclusive Bodyguard\"";
		console.log('landingExclusiveBodyguardController.ctrl');
	}
]);

securityController.controller('landingExclusiveBodyguardCreateController.ctrl',['$scope', '$routeParams', '$http',
	function($scope,$routeParams,$http){
		$scope.pageHeader = "\"Exclusive Bodyguard\"";
		$scope.showSuccess = function(){
			swal("Success","Your order has been submited, Please wait for confirmation","success");
		}
		console.log('landingExclusiveBodyguardCreateController.ctrl');
	}
]);

securityController.controller('landingMyHistoryController.ctrl',['$scope', '$routeParams', '$http',
	function($scope,$routeParams,$http){
		$scope.pageHeader = "\"My History\"";
		console.log('landingMyHistoryController.ctrl');
	}
]);

securityController.controller('landingMyHistoryBodyguardController.ctrl',['$scope', '$routeParams', '$http',
	function($scope,$routeParams,$http){
		$scope.pageHeader = "\"My History\"";
		console.log('landingMyHistoryBodyguardController.ctrl');
	}
]);

securityController.controller('landingMyHistoryEventController.ctrl',['$scope', '$routeParams', '$http',
	function($scope,$routeParams,$http){
		$scope.pageHeader = "\"My History\"";
		console.log('landingMyHistoryEventController.ctrl');
	}
]);

securityController.controller('landingFriendController.ctrl',['$scope', '$routeParams', '$http',
	function($scope,$routeParams,$http){
		$scope.pageHeader = "\"My Friend\"";
		console.log('landingFriendController.ctrl');
	}
]);

securityController.controller('landingFriendAddController.ctrl',['$scope', '$routeParams', '$http',
	function($scope,$routeParams,$http){
		$scope.pageHeader = "\"My Friend\"";
		$scope.showSuccess = function(){
		swal("Success","Rose Pearce Success to add friend","success");
	}
		console.log('landingFriendAddController.ctrl');
	}
]);

securityController.controller('pulangBarengHomeController.ctrl',['$scope', '$routeParams', '$http',
	function($scope,$routeParams,$http){
		$scope.pageHeader = "\"Home\"";
		console.log('pulangBarengHomeController.ctrl');
	}
]);
