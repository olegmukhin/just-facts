;(function ( $, window, document, undefined ) {

    defaults = {
        classOnShow: false,
    };

    var methods = {
        init : function( options ) { 
            this.options = $.extend( {}, defaults, options);
        },
        show : function( ) {
            this.data('justFacts-fact', true);
            this.each(function() {
                var container = $(this).parent();
                if(container.data('justFacts-active') != true) {
                    container.contents().filter(function() {
                        if( this.nodeType == 3 ) {
                            var wrapped = $('<span>' + $(this).text() + '</span>').hide();
                            $(this).replaceWith(wrapped);
                        } else if( this.nodeType == 1 && $(this).data('justFacts-fact') != true ) {
                            return this;
                        }
                    }).hide();
                    container.data('justFacts-active', true);
                }
            });
        },
        hide : function( ) {
            this.parent().data('justFacts-active', false).children().show();
        },
    };

    $.fn.justFacts = function( method ) {

        if ( methods[method] ) {
            return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof method === 'object' || ! method ) {
            return methods.init.apply( this, arguments );
        } else {
            $.error( 'Method ' +  method + ' does not exist on jQuery.tooltip' );
        }

    };

})( jQuery, window, document );