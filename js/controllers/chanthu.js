//*****************************************************************************************************************
// Copyright 2016 Feed. All rights reserved.
// You may not copy, reproduce, republish, disassemble, decompile, reverse engineer, post, broadcast, transmit, or
// make available to the public any content or code on this website without prior written permission from Feed.
//*****************************************************************************************************************

'use strict';

var ctl = angular.module('ChanthuController', ['Resources']);

ctl.controller('ChanthuCtrl', function ($scope, $routeParams, $location, LogResource) {
  LogResource.Post({
    'path': $location.$$path
  });

  document.getElementById("title").innerHTML = "Feed | Chanthu Oeur";
  document.getElementById("desc").content = "Chanthu Oeur, founder of Feed Cambodia."
  document.getElementById("og-url").content = "https://feedcambodia.com/chanthu"
  document.getElementById("og-title").content = "My Childhood in Cambodia by Chanthu Oeur"
  document.getElementById("og-desc").content = "Read my story and view my photo album."
  document.getElementById("og-image").content = "https://lh3.googleusercontent.com/-69Mylf3RlmA/V_7tVYCq7RI/AAAAAAAAAKg/ExY9K_08EbE-4MJCMLpkG43POnEgJVbTQCHM/s2048/FB_IMG_1475722124848.jpg"
  document.getElementById("og-site-name").content = "Chanthu Oeur of Feed Cambodia"
});
