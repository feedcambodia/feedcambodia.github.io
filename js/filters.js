//*****************************************************************************************************************
// Copyright � 2016 Feed. All rights reserved.
// You may not copy, reproduce, republish, disassemble, decompile, reverse engineer, post, broadcast, transmit, or
// make available to the public any content or code on this website without prior written permission from Feed.
//*****************************************************************************************************************

'use strict';

var fil = angular.module('Filters', []);

fil.filter('stringify', function () {
    return function (input) {
        return JSON.stringify(input);
    };
});

fil.filter('thumb', function () {
    return function (input) {
        if (input.indexOf('s72') > -1)
            return input.replace('s72', 's250');
        else
            return input;
    };
});

fil.filter('full', function () {
    return function (input) {
        if (input.indexOf('s72') > -1)
            return input.replace('s72', 's2048');
        else
            return input;
    };
})

fil.filter('date', function () {
    return function (input) {
        return new Date(input).toLocaleString();
    };
});;
