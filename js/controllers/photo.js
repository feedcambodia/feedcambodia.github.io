//*****************************************************************************************************************
// Copyright 2014-2020 Feed Cambodia. All rights reserved.
// You may not copy, reproduce, republish, disassemble, decompile, reverse engineer, post, broadcast, transmit, or
// make available to the public any content or code on this website without prior written permission from Feed Cambodia.
//*****************************************************************************************************************

'use strict';

var ctl = angular.module('PhotoController', ['Resources']);

ctl.controller('PhotoCtrl', function ($scope, $location, FlickrStreamResource, LogResource) {
  LogResource.Post({
    'path': $location.$$path
  });

  FlickrStreamResource.Get({
    'method': 'flickr.people.getPublicPhotos',
		'extras': 'url_m, description',
		'sort': 'interestingness-desc',
		'user_id': '147534410@N06'
  }).$promise.then(function (data) {
		$scope.photos = data.photos.photo;
	});
});
