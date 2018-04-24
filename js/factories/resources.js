//*****************************************************************************************************************
// Copyright 2014-2018 Lahuna. All rights reserved.
// You may not copy, reproduce, republish, disassemble, decompile, reverse engineer, post, broadcast, transmit, or
// make available to the public any content or code on this website without prior written permission from Lahuna.
//*****************************************************************************************************************

'use strict';

var res = angular.module('Resources', ['ngResource']);

// Send Email
res.factory('EmailResource', function ($resource) {
  var host = location.hostname;
  if (host == 'feedcambodia.com') {
    host = 'lahuna.com';
  }
  return $resource('https://lahuna.net/email', {}, {
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
  return $resource('https://lahuna.net/log', {}, {
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
  return $resource('https://picasaweb.google.com/data/feed/api/user/112973952418146798615/albumid/6340765808908508833', {}, {
    Get: {
      method: 'JSONP',
      isArray: false,
      params: { 'key': 'AIzaSyAhXUfc4ISI65ORq9BAUgrNTehsV6f_oIk',
                'alt': 'json',
                'callback': 'JSON_CALLBACK' }
    }
  });
});

res.factory('FlickrResource', function ($resource) {
  return $resource('https://api.flickr.com/services/rest/', {}, {
    Get: {
      method: 'GET',
      params: { 'api_key': '989da93e9746df76305938efccf41799',
                'format': 'json',
                'nojsoncallback': 1 }
    }
  });
});

res.factory('FlickrLicenseResource', function ($resource) {
  return $resource('/data/flickr-license.json', {}, {
    Get: {
      method: 'GET'
    }
  });
});

/*res.factory('PicasaAlbumFeedResource', function ($resource) {
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
});*/

/*res.factory('PlaylistResource', function ($resource) {
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
});*/

res.factory('PlaylistResource', function ($resource) {
  return $resource('https://www.googleapis.com/youtube/v3/playlists', {}, {
    Get: {
      method: 'GET',
      params: { 'key': 'AIzaSyAhXUfc4ISI65ORq9BAUgrNTehsV6f_oIk'}
    }
  });
});

res.factory('VideoResource', function ($resource) {
  return $resource('https://www.googleapis.com/youtube/v3/search', {}, {
    Get: {
      method: 'GET',
      params: { 'key': 'AIzaSyAhXUfc4ISI65ORq9BAUgrNTehsV6f_oIk'}
    }
  });
});

res.factory('WikiResource', function ($resource) {
  return $resource('https://en.wikipedia.org/w/api.php', {}, {
    Get: {
      method: 'JSONP',
      isArray: false,
      headers: { 'User-Agent': 'Feed Cambodia (https://feedcambodia.com/contact)' },
      params: { 'callback': 'JSON_CALLBACK' }
    }
  });
});

/*res.factory('WikiResource', function ($resource) {
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
});*/

/*res.factory('WikiCommonsResource', function ($resource) {
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
});*/

res.factory('WikiExcludeResource', function ($resource) {
  return $resource('/data/wiki_image_exclude.json', {}, {
    Get: {
      method: 'GET'
    }
  });
});
