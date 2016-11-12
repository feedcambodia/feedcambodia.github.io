//*****************************************************************************************************************
// Copyright 2016 Chanthu Oeur. All rights reserved.
// You may not copy, reproduce, republish, disassemble, decompile, reverse engineer, post, broadcast, transmit, or
// make available to the public any content or code on this website without prior written permission from Chanthu Oeur.
//*****************************************************************************************************************

'use strict';

var res = angular.module('Resources', ['ngResource']);

// Send Email
res.factory('EmailResource', function ($resource) {
  var host = location.hostname;
  if (host == 'feedcambodia.com') {
    host = 'lahuna.com';
  }
  return $resource('https://' + host + ':8000/email', {}, {
    Send: {
        method: 'GET'
    }
  });
});

// Log
res.factory('LogResource', function ($resource) {
  var host = location.hostname;
  if (host == 'feedcambodia.com') {
    host = 'lahuna.com';
  }
  return $resource('https://' + host + ':8000/log', {}, {
    Get: {
      method: 'GET',
      params: { 'site': location.hostname }
    },
    Post: {
      method: 'POST',
      params: { 'site': location.hostname }
    },
    Delete: {
      method: 'DELETE',
      params: { 'site': location.hostname }
    }
  });
});

res.factory('PicasaAlbumFeedResource', function ($resource) {
  var host = location.hostname;
  if (host == 'feedcambodia.com') {
    host = 'lahuna.com';
  }
  return function (albumId) {
    var resource = 'https://picasaweb.google.com/data/feed/api/user/112973952418146798615/albumid/' + albumId;
    return $resource('https://' + host + ':8000/other', {}, {
      Get: {
        method: 'GET',
        params: { 'resource': resource, 'alt': 'json' }
      }
    });
  }
});

res.factory('PlaylistResource', function ($resource) {
  var host = location.hostname;
  if (host == 'feedcambodia.com') {
    host = 'lahuna.com';
  }
  return function () {
    var resource = 'https://www.googleapis.com/youtube/v3/playlists';
    return $resource('https://' + host + ':8000/other', {}, {
      Get: {
        method: 'GET',
        params: { 'resource': resource }
      }
    });
  }
});

res.factory('WikiResource', function ($resource) {
  var host = location.hostname;
  if (host == 'feedcambodia.com') {
    host = 'lahuna.com';
  }
  var resource = 'https://en.wikipedia.org/w/api.php';
  return $resource('https://' + host + ':8000/other', {}, {
    Get: {
      method: 'GET',
      params: { 'resource': resource }
    }
  });
});

res.factory('WikiCommonsResource', function ($resource) {
  var host = location.hostname;
  if (host == 'feedcambodia.com') {
    host = 'lahuna.com';
  }
  var resource = 'https://commons.wikimedia.org/w/api.php';
  return $resource('https://' + host + ':8000/other', {}, {
    Get: {
      method: 'GET',
      params: { 'resource': resource }
    }
  });
});

res.factory('WikiExcludeResource', function ($resource) {
  return $resource('/data/wiki_image_exclude.json', {}, {
    Get: {
      method: 'GET'
    }
  });
});
