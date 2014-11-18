define( function () {
  'use strict';

  var metaData = {
    vector: {
      title: "Vector/Dynamic Array Data Structure",
      description: "Javascript Arrays are dynamic",
      wiki: "In computer science, a dynamic array, growable array, resizable array, dynamic table, mutable array, " +
      "or array list is a random access, variable-size list data structure that allows elements to be added or removed. " +
      "It is supplied with standard libraries in many modern mainstream programming languages. A dynamic array is not " +
      "the same thing as a dynamically allocated array, which is a fixed-size array whose size is fixed when the array" +
      " is allocated, although a dynamic array may use such a fixed-size array as a back end.",
      codez: "/pages/vector/usage.html",
      jsCodez: "/pages/vector/vector.html"
    },
    bitArray: {
      title: "Bit Array Data Structure",
      description: "This data structure implements a vector of bits that grows as needed. Each non-negative index is" +
      " either true or false.",
      wiki: "A bit array (also known as bitmap, bitset, bit string, or bit vector) is an array data " +
      "structure that compactly stores bits. It can be used to implement a simple set data structure. " +
      "A bit array is effective at exploiting bit-level parallelism in hardware to perform operations quickly. " +
      "A typical bit array stores kw bits, where w is the number of bits in the unit of storage, such as a byte or word," +
      " and k is some nonnegative integer. If w does not divide the number of bits to be stored, some space is wasted " +
      "due to internal fragmentation",
      codez: "/pages/bitarray/usage.html",
      jsCodez: "/pages/bitarray/bitarray.html"
    },
    circularBuffer: {
      title: "",
      description: "",
      wiki: "",
      codez: "",
      jsCodez: ""
    },
    hashTable: {
      title: "",
      description: "",
      wiki: "",
      codez: "",
      jsCodez: ""
    },
    hashedArrayTree: {
      title: "",
      description: "",
      wiki: "",
      codez: "",
      jsCodez: ""
    },
    sparseArray: {
      title: "",
      description: "",
      wiki: "",
      codez: "",
      jsCodez: ""
    }
  };

  var metaHelper = {

    get: function(type){
      return metaData[type];
    },

    getDescription: function(type){
      return metaData[type].description;
    },

    getTitle: function(type){
      return metaData[type].title;
    },

    getWikiDescription: function(type){
      return metaData[type].wiki;
    }

  }

  return metaHelper;

});

