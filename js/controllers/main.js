//*****************************************************************************************************************
// Copyright � 2016 Feed. All rights reserved.
// You may not copy, reproduce, republish, disassemble, decompile, reverse engineer, post, broadcast, transmit, or
// make available to the public any content or code on this website without prior written permission from Feed.
//*****************************************************************************************************************

'use strict';

var ctl = angular.module('MainController', ['Resources']);

ctl.controller('MainCtrl', function ($scope, $routeParams, $location, LogResource) {
  LogResource($location.$$path).Post();
});
