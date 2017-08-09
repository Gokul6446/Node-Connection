//var app = angular.module('AppSer',['ngResource']);
app.controller('meetupsController',['$scope','$resource',function($scope,$resource)
{
	//$scope.meetupsCount =10;
   var Meetup=$resource('/api/meetups');

	$scope.meetups=[
		{
			Name:"George",
			Speaker :"Michel"
		},
		{
			Name:"Gary",
			Speaker :"Adams"
		},
		{
			Name:"Sachin",
			Speaker :"Hayden"
		}]

$scope.createMeet=function()
{
	$scope.meetups.push({Name: $scope.meetupName, Speaker: $scope.meetupSpeaker});
	$scope.meetupName='';
	$scope.meetupSpeaker='';


}
}]);
