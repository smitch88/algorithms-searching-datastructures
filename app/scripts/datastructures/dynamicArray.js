/*
 *
 * Dynamic Array Datastructure
 *
 */
define(["generator"], function (generator) {
  'use strict';

  var dynamicArray = function (size) {
    this.size = size;
    this.title = "Dynamic Array Data Structure";
    this.description = "In computer science, a dynamic array, growable array, resizable array, dynamic table, mutable array, " +
    "or array list is a random access, variable-size list data structure that allows elements to be added or removed. " +
    "It is supplied with standard libraries in many modern mainstream programming languages.A dynamic array is not " +
    "the same thing as a dynamically allocated array, which is a fixed-size array whose size is fixed when the array" +
    " is allocated, although a dynamic array may use such a fixed-size array as a back end.";

    return this;
  };

  dynamicArray.prototype = {

    constructor: dynamicArray,

    init: function () {

      console.log("process generator for dynamic array with size: " + this.size);
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

  return dynamicArray;

});

