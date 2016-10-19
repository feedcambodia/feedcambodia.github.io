//*****************************************************************************************************************
// Copyright � 2016 Feed. All rights reserved.
// You may not copy, reproduce, republish, disassemble, decompile, reverse engineer, post, broadcast, transmit, or
// make available to the public any content or code on this website without prior written permission from Feed.
//*****************************************************************************************************************

'use strict';

var res = angular.module('Resources', ['ngResource']);

// Send Email
res.factory('EmailResource', function ($resource) {
  return $resource('https://lahuna.com:8000/email', {}, {
    Send: {
        method: 'GET'
    }
  });
});

// Log
res.factory('LogResource', function ($resource) {
  return $resource('https://localhost:8000/log', {}, {
    Get: {
      method: 'GET'
    },
    Post: {
      method: 'POST'
    },
    Delete: {
      method: 'DELETE'
    }
  });
});

res.factory('PicasaAlbumFeedResource', function ($resource) {
  return function (albumId) {
    var resource = 'https://picasaweb.google.com/data/feed/api/user/112973952418146798615/albumid/' + albumId;
    return $resource('https://lahuna.com:8000/other', {}, {
      Get: {
        method: 'GET',
        params: { 'resource': resource, 'alt': 'json' }
      }
    });
  }
});

res.factory('YoutubeResource', function ($resource) {
  return function () {
    var resource = 'https://www.googleapis.com/youtube/v3/playlists';
    return $resource('https://lahuna.com:8000/other', {}, {
      Get: {
        method: 'GET',
        params: { 'resource': resource }
      }
    });
  }
});
