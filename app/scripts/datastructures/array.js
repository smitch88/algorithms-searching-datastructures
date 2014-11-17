
define(["generator"], function (generator) {
  'use strict';

  var basicArray = function (size) {
    this.size = size;
    this.title = "Basic Array Data Structure";
    this.description = "In computer science, an array data structure or simply an array is a data structure consisting of a " +
    "collection of elements (values or variables), each identified by at least one array index or key. " +
    "An array is stored so that the position of each element can be computed from its index " +
    "tuple by a mathematical formula";

    return this;
  };

  basicArray.prototype = {

    constructor: basicArray,

    init: function () {

      console.log("process generator with size: " + this.size);
      console.log(generator.create());

      return this;

    },

    getDescription: function () {
      return this.description;
    },

    getTitle: function () {
      return this.title;
    },

    getCodez: function () {
      return [];
    }

  }

  return basicArray;

});

