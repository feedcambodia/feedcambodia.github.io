//*****************************************************************************************************************
// Copyright 2016 Chanthu Oeur. All rights reserved.
// You may not copy, reproduce, republish, disassemble, decompile, reverse engineer, post, broadcast, transmit, or
// make available to the public any content or code on this website without prior written permission from Chanthu Oeur.
//*****************************************************************************************************************

'use strict';

var app = angular.module('feed', [
  'ngRoute',
  'MainController',
  'ContactController',
  'PhotoController',
  'VideoController',
  'PlayerController',
  'LogController',
  'IpController',
  'MediaController',
  'WikiController',
  'Filters'
]);

app.config(
    function ($routeProvider, $locationProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'views/home.html',
                controller: 'MainCtrl'
            }).
            when('/about', {
                templateUrl: 'views/about.html',
                controller: 'MainCtrl'
            }).
            when('/organization', {
                templateUrl: 'views/organization.html',
                controller: 'MainCtrl'
            }).
            when('/chanthu', {
                templateUrl: 'views/chanthu.html',
                controller: 'MainCtrl'
            }).
            when('/ouw', {
                templateUrl: 'views/ouw.html',
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
            when('/player/:playlistId', {
                templateUrl: 'views/player.html',
                controller: 'PlayerCtrl'
            }).
            when('/player0', {
                templateUrl: 'views/player0.html',
                controller: 'PlayerCtrl'
            }).
            when('/social', {
                templateUrl: 'views/social.html',
                controller: 'MainCtrl'
            }).
            when('/share', {
                templateUrl: 'views/share.html',
                controller: 'MainCtrl'
            }).
            when('/budget', {
                templateUrl: 'views/budget.html',
                controller: 'MainCtrl'
            }).
            when('/media?:src', {
                templateUrl: 'views/media.html',
                controller: 'MediaCtrl'
            }).
            when('/contact', {
                templateUrl: 'views/contact.html',
                controller: 'ContactCtrl'
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
            when('/success', {
                templateUrl: 'views/success.html',
                controller: 'MainCtrl'
            }).
            when('/cancel', {
                templateUrl: 'views/cancel.html',
                controller: 'MainCtrl'
            }).
            when('/log', {
                templateUrl: 'views/log.html',
                controller: 'LogCtrl'
            }).
            when('/log/:ip', {
                templateUrl: 'views/log.html',
                controller: 'LogCtrl'
            }).
            when('/ip', {
                templateUrl: 'views/ip.html',
                controller: 'IpCtrl'
            }).
            when('/ip/:ip', {
                templateUrl: 'views/ip.html',
                controller: 'IpCtrl'
            }).
            when('/facebook', {
                templateUrl: 'views/facebook.html',
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
            when('/wiki/commons/:title', {
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
            when('/wiki', {
                templateUrl: 'views/wiki.html',
                controller: 'MainCtrl'
            }).
            otherwise({
                redirectTo: '/notfound'
            });

          $locationProvider.html5Mode(true);
  });
