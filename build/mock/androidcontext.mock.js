define( [ 'mockForms' ], function( mockForms ) {
    return {
        //formName: 'ANC_Registration_24_5_12',
        //formName: 'EC_Registration_24_5_12',
        formName: getURLParameter( 'formName' ),

        getForm: function() {
            return mockForms[ this.formName ].html_form;
        },

        getModel: function() {
            return mockForms[ this.formName ].xml_model;
        },

        goBack: function() {}
    };
} );

// what is this?
/*
var logContext = {
    logError: function( e ) {
        console.log( e );
    }
};
*/

String.prototype.format = function( a, b, c ) {
    return a + b + c;
}

function getURLParameter( name ) {
    return decodeURI(
        ( RegExp( name + '=' + '(.+?)(&|$)' ).exec( location.search ) || [ , null ] )[ 1 ]
    );
}

//this happens automatically in main app for mobiles
/*
function setToMobileMode() {
    require( [ 'Modernizr' ], function( Modernizr ) {
        Modernizr.touch = true;
        var html = document.getElementsByTagName( 'html' )[ 0 ];
        html.className = html.className.replace( /no-touch/, 'touch' );
    } );
};
*/
