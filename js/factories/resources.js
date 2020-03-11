//*****************************************************************************************************************
// Copyright 2014-2020 Feed Cambodia. All rights reserved.
// You may not copy, reproduce, republish, disassemble, decompile, reverse engineer, post, broadcast, transmit, or
// make available to the public any content or code on this website without prior written permission from Feed Cambodia.
//*****************************************************************************************************************

'use strict';

var res = angular.module('Resources', ['ngResource']);

res.factory('FlickrStreamResource', function ($resource) {
  return $resource('https://api.flickr.com/services/rest', {}, {
    Get: {
      method: 'GET',
      params: { 'api_key': '989da93e9746df76305938efccf41799',
                'format': 'json',
                'nojsoncallback': 1 }
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

res.factory('WikiExcludeResource', function ($resource) {
  return $resource('/data/wiki_image_exclude.json', {}, {
    Get: {
      method: 'GET'
    }
  });
});
