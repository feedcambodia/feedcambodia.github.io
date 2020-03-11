//*****************************************************************************************************************
// Copyright 2014-2020 Feed Cambodia. All rights reserved.
// You may not copy, reproduce, republish, disassemble, decompile, reverse engineer, post, broadcast, transmit, or
// make available to the public any content or code on this website without prior written permission from Feed Cambodia.
//*****************************************************************************************************************

'use strict';

var app = angular.module('feed', [
  'ngRoute',
  'MainController',
  'PhotoController',
  'VideoController',
  'PlayerController',
  'MediaController',
  'WikiController',
  'FlickrController',
  'Filters'
]);

app.config(
    function ($routeProvider, $locationProvider) {
        $routeProvider.
            when('/learn', {
                templateUrl: 'views/learn.html',
                controller: 'MainCtrl'
            }).
            when('/flickr', {
                templateUrl: 'views/flickr-search.html',
                controller: 'FlickrSearchCtrl'
            }).
            when('/flickr/user/:userid', {
                templateUrl: 'views/flickr-search.html',
                controller: 'FlickrSearchCtrl'
            }).
            when('/flickr/:id', {
                templateUrl: 'views/flickr-image.html',
                controller: 'FlickrImageCtrl'
            }).
            when('/', {
                templateUrl: 'views/home.html',
                controller: 'MainCtrl'
            }).
            when('/about', {
                templateUrl: 'views/about.html',
                controller: 'MainCtrl'
            }).
             when('/chanthu', {
                templateUrl: 'views/chanthu.html',
                controller: 'MainCtrl'
            }).
			when('/kimlean', {
                templateUrl: 'views/kimlean.html',
                controller: 'MainCtrl'
            }).
            when('/photo', {
                templateUrl: 'views/photo.html',
                controller: 'PhotoCtrl'
            }).
            when('/video', {
                templateUrl: 'views/video.html',
                controller: 'VideoCtrl'
            }).
            when('/video/search', {
                templateUrl: 'views/video-search.html',
                controller: 'VideoSearchCtrl'
            }).
            when('/player/playlist/:playlistId', {
                templateUrl: 'views/player.html',
                controller: 'PlayerCtrl'
            }).
            when('/player/video/:videoId', {
                templateUrl: 'views/player.html',
                controller: 'PlayerCtrl'
            }).
            when('/media?:src', {
                templateUrl: 'views/media.html',
                controller: 'MediaCtrl'
            }).
            when('/contact', {
                templateUrl: 'views/contact.html',
                controller: 'MainCtrl'
			}).
            when('/privacy', {
                templateUrl: 'views/privacy.html',
                controller: 'MainCtrl'
            }).
            when('/terms', {
                templateUrl: 'views/terms.html',
                controller: 'MainCtrl'
            }).
            when('/notfound', {
                templateUrl: 'views/notfound.html',
                controller: 'MainCtrl'
            }).
            when('/cancel', {
                templateUrl: 'views/cancel.html',
                controller: 'MainCtrl'
            }).
            when('/comment', {
                templateUrl: 'views/comment.html',
                controller: 'MainCtrl'
            }).
            when('/wiki/image/:title', {
                templateUrl: 'views/wiki-image.html',
                controller: 'WikiImageCtrl'
            }).
            when('/wiki/link/:title', {
                templateUrl: 'views/wiki-link.html',
                controller: 'WikiLinkCtrl'
            }).
            when('/wiki/commons/image/:title', {
                templateUrl: 'views/wiki-com-image.html',
                controller: 'WikiComImageCtrl'
            }).
            when('/wiki/commons/search', {
                templateUrl: 'views/wiki-com-search.html',
                controller: 'WikiCommonsSearchCtrl'
            }).
            when('/wiki/commons/:title/:section', {
                templateUrl: 'views/wiki-extract.html',
                controller: 'WikiCommonsCtrl'
            }).
            when('/wiki/search', {
                templateUrl: 'views/wiki-search.html',
                controller: 'WikiSearchCtrl'
            }).
            when('/wiki/extract/:title', {
                templateUrl: 'views/wiki-extract.html',
                controller: 'WikiExtractCtrl'
            }).
            when('/wiki/page/:title', {
                templateUrl: 'views/wiki-extract.html',
                controller: 'WikiPageCtrl'
            }).
            when('/wiki/section/:title', {
                templateUrl: 'views/wiki-section.html',
                controller: 'WikiSectionCtrl'
            }).
            when('/wiki', {
                templateUrl: 'views/wiki.html',
                controller: 'MainCtrl'
            }).
            otherwise({
                redirectTo: '/notfound'
            });
  });
