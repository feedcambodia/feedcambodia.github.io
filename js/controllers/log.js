//*****************************************************************************************************************
// Copyright � 2016 Feed. All rights reserved.
// You may not copy, reproduce, republish, disassemble, decompile, reverse engineer, post, broadcast, transmit, or
// make available to the public any content or code on this website without prior written permission from Feed.
//*****************************************************************************************************************

'use strict';

var ctl = angular.module('LogController', ['Resources']);

ctl.controller('LogCtrl', function ($scope, $routeParams, $location, LogResource) {
  $scope.log = LogResource.Get();

  $scope.delete = function(index, id) {
    $scope.log.list.splice(index, 1);
    LogResource.Delete({
      '_id': id
    });
  }

  $scope.deleteAll = function() {
    $scope.log = undefined;
    LogResource.Delete();
  }
});
