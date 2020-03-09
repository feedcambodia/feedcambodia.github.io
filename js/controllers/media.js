//*****************************************************************************************************************
// Copyright 2014-2020 Feed Cambodia. All rights reserved.
// You may not copy, reproduce, republish, disassemble, decompile, reverse engineer, post, broadcast, transmit, or
// make available to the public any content or code on this website without prior written permission from Feed Cambodia.
//*****************************************************************************************************************

'use strict';

var ctl = angular.module('MediaController', ['Resources']);

ctl.controller('MediaCtrl', function ($scope, $sce, $routeParams, $location, LogResource) {
  LogResource.Post({
    'path': $location.$$path
  });

  $scope.q = $location.search();
});
