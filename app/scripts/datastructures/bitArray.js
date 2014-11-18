define(["meta","datastructures/vector"], function (meta,Vector) {
  'use strict';

  var bitArray = function (size, defaultValue) {
    this.type = "bitArray";
    this.el = new Vector(size); // just uses the base array impl
    this.meta = meta.get(this.type);
    this.el.replaceAll(typeof defaultValue !== "undefined" && defaultValue); // fill array with booleans set to false or default
    return this;
  };

  bitArray.prototype = {

    constructor: bitArray,

    // public instance methods
    and: function( bitArray ){
      return bitArray;
    },

    andNot: function( bitArray ){
      return bitArray;
    },

    cardinality: function( bitArray ){
      return;
    },

    clear: function( index, from, to ){
      return;
    },

    clone: function(){
      return bitArray;
    },

    flip: function( index, from, to ){
      return;
    },

    get: function( index, from, to ){
      return index;
    },

    intersects: function( bitArray ){
      return true;
    },

    isEmpty: function(){
      return true;
    },

    length: function(){
      return 1;
    },

    nextClearBit: function( from ){
      return 1;
    },

    nextSetBit: function( from ){
      return 1;
    },

    or: function( bitArray ){
      return;
    },

    previousClearBit: function( from ){
      return 1;
    },

    previousSetBit: function( from ){
      return 1;
    },

    set: function( index, from, to, value ){
      return;
    }

  }

  return bitArray;

});
