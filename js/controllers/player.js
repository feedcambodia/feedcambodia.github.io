//*****************************************************************************************************************
// Copyright � 2016 Feed. All rights reserved.
// You may not copy, reproduce, republish, disassemble, decompile, reverse engineer, post, broadcast, transmit, or
// make available to the public any content or code on this website without prior written permission from Feed.
//*****************************************************************************************************************

'use strict';

var ctl = angular.module('PlayerController', ['Resources']);

ctl.controller('PlayerCtrl', function ($scope, $routeParams, $sce, $location, LogResource) {
  LogResource.Post({
    'path': $location.$$path
  });

  var playlistId = $routeParams.playlistId;
  $scope.videoUrl = $sce.trustAsResourceUrl("https://www.youtube.com/embed?listType=playlist&list=" + playlistId);
});