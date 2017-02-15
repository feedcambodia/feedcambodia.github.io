//*****************************************************************************************************************
// Copyright 2014 - 2017 Lahuna. All rights reserved.
// You may not copy, reproduce, republish, disassemble, decompile, reverse engineer, post, broadcast, transmit, or
// make available to the public any content or code on this website without prior written permission from Chanthu Oeur.
//*****************************************************************************************************************

'use strict';

var ctl = angular.module('VideoController', ['Resources']);

ctl.controller('VideoCtrl', function ($scope, $routeParams, $location, PlaylistResource, LogResource) {
  LogResource.Post({
    'path': $location.$$path
  });

  $scope.videos = PlaylistResource.Get({
    'part': 'snippet',
    'channelId': 'UCO3EB-nz80N1VHyYaG81G3A',
    'maxResults': 50
  });
});
