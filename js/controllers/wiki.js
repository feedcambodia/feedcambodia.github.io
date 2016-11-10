//*****************************************************************************************************************
// Copyright 2016 Chanthu Oeur. All rights reserved.
// You may not copy, reproduce, republish, disassemble, decompile, reverse engineer, post, broadcast, transmit, or
// make available to the public any content or code on this website without prior written permission from Chanthu Oeur.
//*****************************************************************************************************************

'use strict';

var ctl = angular.module('WikiController', ['Resources']);

ctl.controller('WikiCtrl', function ($sce, $scope, $routeParams, $location,
  LogResource, WikiResource) {
  LogResource.Post({
    'path': $location.$$path
  });

  WikiResource.Get({
    titles: $routeParams.title,
    action: 'query',
    prop: 'extracts|links',
    format: 'json'
  }).$promise.then(function (data) {
    var pageId = getPageId(data.query.pages);
    $scope.info = $sce.trustAsHtml(data.query.pages[pageId].extract);
  });

  function getPageId(pages) {
    for (var pageId in pages) {
      return pageId;
    }
  }
});

ctl.controller('WikiCommonsCtrl', function ($sce, $scope, $routeParams, $location,
  LogResource, WikiCommonsResource) {
  LogResource.Post({
    'path': $location.$$path
  });

  WikiCommonsResource.Get({
    titles: $routeParams.title,
    action: 'query',
    prop: 'imageinfo',
    iiprop: 'url|extmetadata',
    iiurlwidth: 250,
    format: 'json'
  }).$promise.then(function (data) {
    //$scope.info = data.query.pages;
  });
});

ctl.controller('WikiImageCtrl', function ($sce, $scope, $routeParams, $location,
  LogResource, WikiResource, WikiCommonsResource) {
  LogResource.Post({
    'path': $location.$$path
  });

  /*WikiResource.Get({
    pageids: 334751,
    action: 'query',
    prop: 'images',
    format: 'json',
    imlimit: 500
  }).$promise.then(function (data) {
    //$scope.info = data.query.pages[334751].images;
  });*/

  WikiResource.Get({
    titles: $routeParams.title,
    action: 'query',
    prop: 'imageinfo',
    iiprop: 'url|extmetadata',
    iiurlwidth: 250,
    generator: 'images',
    format: 'json',
    gimlimit: 100
  }).$promise.then(function (data) {
    var pages = data.query.pages;

    var i = 0;
    for (var item in pages) {
      var pageId = getPageId(pages, i);
      if (!pages[pageId].imageinfo) {
        getImage(pages[pageId].title, function(result) {
          pages[pageId].imageinfo = result;
          pages
        });
      }
      i++;
    }
    $scope.info = pages;
  });

  $scope.goSce = function(html) {
    if (!html) {
      return;
    }

    html = html.replace('https://en.wikipedia.org', '');
    html = html.replace('https://commons.wikimedia.org/wiki/', '/wiki/commons/');
    html = html.replace('//commons.wikimedia.org/wiki/', '/wiki/commons/');
    return $sce.trustAsHtml(html);
  }

  function getImage(title, callback) {
    WikiCommonsResource.Get({
      titles: title,
      action: 'query',
      prop: 'imageinfo',
      iiprop: 'url|extmetadata',
      iiurlwidth: 250,
      format: 'json'
    }).$promise.then(function (data) {
      var pages = data.query.pages;
      var pageId = getPageId(pages, 0);
      return callback(pages[pageId].imageinfo);
    });
  }

  function getPageId(pages, index) {
    var i = 0;
    for (var pageId in pages) {
      if (i == index) {
        return pageId;
      } else {
        i++;
      }
    }
  }
});
