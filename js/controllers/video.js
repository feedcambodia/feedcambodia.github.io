//*****************************************************************************************************************
// Copyright 2014-2020 Feed Cambodia. All rights reserved.
// You may not copy, reproduce, republish, disassemble, decompile, reverse engineer, post, broadcast, transmit, or
// make available to the public any content or code on this website without prior written permission from Feed Cambodia.
//*****************************************************************************************************************

'use strict';

var ctl = angular.module('VideoController', ['Resources']);

ctl.controller('VideoCtrl', function ($scope, PlaylistResource) {

    $scope.videos = PlaylistResource.Get({
    'part': 'snippet',
    'channelId': 'UCO3EB-nz80N1VHyYaG81G3A',
    'maxResults': 50
  });
});

ctl.controller('VideoSearchCtrl', function ($scope, VideoResource) {

  var sval = localStorage.getItem('youtube_search');
  if (sval && sval.length > 0) {
    $scope.search = sval;
  } else {
    $scope.search = 'Cambodia';
  }
  search();

  function search() {
    localStorage.setItem('youtube_search', $scope.search);
    $scope.videos = VideoResource.Get({
      'q': $scope.search,
      'type': 'video',
      'order': 'viewCount',
      'part': 'snippet',
      'maxResults': 50
    });
  }

  $scope.goSearch = function ($event) {
    var keypressed = $event.keyCode || $event.which;
    if (keypressed == 13) {
      search();
    }
  }

  $scope.clickSearch = function () {
    search();
  }  
});