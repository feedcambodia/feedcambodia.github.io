//*****************************************************************************************************************
// Copyright 2014-2020 Feed Cambodia. All rights reserved.
// You may not copy, reproduce, republish, disassemble, decompile, reverse engineer, post, broadcast, transmit, or
// make available to the public any content or code on this website without prior written permission from Feed Cambodia.
//*****************************************************************************************************************

'use strict';

var ctl = angular.module('ReserveController', ['Resources']);

ctl.controller('ReserveCtrl', function ($scope, $location, EmailResource, LogResource) {

  LogResource.Post({
    'path': $location.$$path
  });

	ClearForm(true);
	$scope.subject = "Taxi Service Reservation Request";

  $scope.SendEmail = function () {

    $scope.alertClass = "alert alert-warning";
		$scope.response = "Sending message...";
		
		var emailBody = "\r\nFeed Cambodia has a referral for you:\r\n" +
			$scope.subject + "\r\n" + 
			"Name: " + $scope.firstName + " " + $scope.lastName + "\r\n" +
			"Phone: " + $scope.phone + "\r\n" +
			"Email: " + $scope.fromAddress + "\r\n" +
			"Number of People: " + $scope.people + "\r\n" +
			"Dates Requested: " + $scope.date + "\r\n" +
			"Message: " + $scope.body;

    EmailResource.Send({
      subject: $scope.subject,
      body: emailBody,
      to: "Feed",
      fromAddress: $scope.fromAddress,
      firstName: $scope.firstName,
      lastName: $scope.lastName
    })
    .$promise.then(function (data) {
      $scope.response = data.message;
      if (data.message == "Message sent successfully") {
        $scope.alertClass = "alert alert-success";
        ClearForm(false);
      }
      else
        $scope.alertClass = "alert alert-danger";
    });
  }

  $scope.ClearForm = function () {
    ClearForm(true);
  }

  function ClearForm(clearMessage) {
    $scope.subject = "";
    $scope.body = "";
    $scope.fromAddress = "";
    $scope.firstName = "";
		$scope.lastName = "";
		$scope.phone = "";
    $scope.people = "";
    $scope.date = "";

    if (clearMessage) {
        $scope.response = "";
        $scope.alertClass = "";
    }
  }
});
