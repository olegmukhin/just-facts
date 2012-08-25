;(function ( $, window, document, undefined ) {

    settings = {
        classOnShow: false,
    };

    var methods = {
        init : function( options ) {
            $.extend( settings, options);
        },
        show : function( ) {
            if( settings.classOnShow !== false ) {
                this.addClass(settings.classOnShow);
            }
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
            if( settings.classOnShow !== false ) {
                this.removeClass(settings.classOnShow);
            }
            this.parent().data('justFacts-active', false).children().show();
        },
        toggle : function( ) {
            if( this.parent().data('justFacts-active') !== true ) {
                methods.show.apply( this );
            } else {
                methods.hide.apply( this );
            }
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