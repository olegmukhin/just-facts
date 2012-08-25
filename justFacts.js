;(function ( $, window, document, undefined ) {

    defaults = {
        bounds: $("body"),
    };


    var methods = {
        init : function( options ) { 
            this.options = $.extend( {}, defaults, options) ;
            this.featured = false;
        },
        show : function( ) {
            this.each( function() {
                var container = $(this).parent();
                if( container.css('display') != 'none' && container.data('justFacts-clone') != true ) {
                    var clone = container.clone();
                    container.before(clone).hide();
                    clone.contents().filter(function() {
                            return this.nodeType == 3;
                    }).remove();
                    clone.data('justFacts-clone', true);
                }
            });
        },
        hide : function( ) {
            
        }
    };

    $.fn.justFacts = function( method ) {

        // Method calling logic
        if ( methods[method] ) {
            return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof method === 'object' || ! method ) {
            return methods.init.apply( this, arguments );
        } else {
            $.error( 'Method ' +  method + ' does not exist on jQuery.tooltip' );
        }

    };

})( jQuery, window, document );