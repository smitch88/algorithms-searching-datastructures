define( ["generator"], function ( generator ) {

  var basicArray = {

    init: function( size ){

      console.log( "process generator with size: " + size );
      console.log( generator.create() );

      return this;

    }

  }


  return basicArray;

});

