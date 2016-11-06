//*****************************************************************************************************************
// Copyright 2016 Chanthu Oeur. All rights reserved.
// You may not copy, reproduce, republish, disassemble, decompile, reverse engineer, post, broadcast, transmit, or
// make available to the public any content or code on this website without prior written permission from Chanthu Oeur.
//*****************************************************************************************************************

'use strict';

var ctl = angular.module('MainController', ['Resources']);

ctl.controller('MainCtrl', function ($scope, $routeParams, $location, $window, LogResource) {
  LogResource.Post({
    'path': $location.$$path
  });

  //$window.parsePinBtns();

  //if (IN) {
    //IN.init();
  //}

  if (FB) {
    FB.init({
      appId: '1752915584981927',
      status: true,
      cookie: true,
      xfbml: true,
      version: 'v2.8'
    });
  }
});
