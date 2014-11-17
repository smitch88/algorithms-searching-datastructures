define( ["generator"], function ( generator ) {

  var dynamicArray = {

    init: function( size ){

      console.log( "process generator for dynamicArray with size: " + size );
      console.log( generator.create() );

      return this;

    }

  }


  return dynamicArray;

});

