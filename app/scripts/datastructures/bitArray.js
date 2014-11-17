
define(["generator"], function (generator) {
  'use strict';

  var bitArray = function (size) {
    this.size = size;
    this.title = "Bit Array Data Structure";
    this.description = "A bit array (also known as bitmap, bitset, bit string, or bit vector) is an array data " +
    "structure that compactly stores bits. It can be used to implement a simple set data structure. " +
    "A bit array is effective at exploiting bit-level parallelism in hardware to perform operations quickly. " +
    "A typical bit array stores kw bits, where w is the number of bits in the unit of storage, such as a byte or word," +
    " and k is some nonnegative integer. If w does not divide the number of bits to be stored, some space is wasted " +
    "due to internal fragmentation";

    return this;
  };

  bitArray.prototype = {

    constructor: bitArray,

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

  return bitArray;

});

