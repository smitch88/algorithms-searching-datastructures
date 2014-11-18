define(["meta"], function (meta) {
  'use strict';

  var vector = function (size) {
    this.type = "vector";
    this.el = size ? new Array(size) : []; // just uses the base array impl since its already dynamic in nature
    this.meta = meta.get(this.type);

    return this;
  };

  vector.prototype = {

    constructor: vector,

    _instance: function(){
      return this.el;
    },

    // public instance methods
    add: function( el, index ){
      if( typeof index !== 'undefined' ){
        this.el.splice(index,0,el); // remove 0 and add el at index
        return;
      } else {
        this.el.push(el);
        return true;
      }
      return false;
    },

    addAll: function( elCollection ){
      if( Array.isArray( elCollection ) ){
        var index = 0, length = elCollection.length;
        for(; index < length; index++){
          this.el.push(elCollection[index]);
        }
        return true;
      } else {
        throw TypeError("Invalid Collection Type. Must be an array of values.");
      }
      return false;
    },

    clear: function(){
      while (this.el.length) { this.el.pop(); }
      return this.el.length === 0;
    },

    contains: function( value ){
      return this.el.indexOf( value ) > 0;
    },

    containsAll: function( elValues ){
      var containsAll = true;
      var length = elValues.length;
      while(length){
        containsAll = containsAll && this.el.indexOf( elValues[length-1] ) > 0;
        length--;
      }
      return containsAll;
    },

    get: function( index ){
      return this.el[index];
    },

    firstElement: function(){
      return this.el[0];
    },

    forEach: function(callback,arg){
      var index = 0, len = this.el.length;
      for (; index < len; index++) {
        callback( this.el[index] );
      }
      return;
    },

    indexOf: function( value ){
      return this.el.indexOf( value );
    },

    remove: function( index ){
      if(this.el[index]){
        this.el.splice(index,1);
        return true;
      }
      return false;
    },

    removeIf: function( predicate ){
      if(typeof predicate === 'function') {
        var len = this.el.length;
        var matches = [];
        for (var i = 0; i < len; i++) {
          if (i in this.el) {
            var val = this.el[i];
            if (!predicate.call(this, val, i, this.el)) {
              matches.push(val);
            }
          }
        }
        this.el = matches;
        return true;
      } else {
        throw TypeError("Predicate is not a function callback.");
      }
      return false;
    },

    replaceAll: function( value, start, end ){
      this.el.fill(value,start,end);
      return true;
    },

    set: function( index, value ){
      if( this.el[index] && typeof value !== 'undefined'){
        this.el[index] = value;
      }
      return false;
    },

    size: function(){
      return this.el.length;
    },

    sort: function( comparator ){
      if( typeof comparator === 'undefined'){
        this.el.sort();
      } else {
        this.el.sort(comparator);
      }
      return;
    }

  }

  return vector;

});
