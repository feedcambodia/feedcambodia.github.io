//*****************************************************************************************************************
// Copyright � 2016 Feed. All rights reserved.
// You may not copy, reproduce, republish, disassemble, decompile, reverse engineer, post, broadcast, transmit, or
// make available to the public any content or code on this website without prior written permission from Feed.
//*****************************************************************************************************************

'use strict';

var ctl = angular.module('VideoController', ['Resources']);

ctl.controller('VideoCtrl', function ($scope, $routeParams, $location, YoutubeResource, LogResource) {
  LogResource.Post({
    'path': $location.$$path
  });

  $scope.videos = YoutubeResource().Get({
    'part': 'snippet',
    'channelId': 'UCO3EB-nz80N1VHyYaG81G3A',
    'maxResults': 50,
    'key': 'AIzaSyAhXUfc4ISI65ORq9BAUgrNTehsV6f_oIk'
  });
});
