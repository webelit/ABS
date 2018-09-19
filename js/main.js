$( function() {
    $( "#progressbar_1" ).progressbar({
        value: 65
    });
    $( "#progressbar_2" ).progressbar({
        value: 47
    });
    $( "#progressbar_3" ).progressbar({
        value: 95
    });
    $( "#progressbar_4" ).progressbar({
        value: 86
    });
    $( "#progressbar_5" ).progressbar({
        value: 55
    });
    $( "#progressbar_6" ).progressbar({
        value: 72
    });
    $( "#progressbar_7" ).progressbar({
        value: 8
    });
} );
$( function() {
    $( "#draggable, #draggable_1, #draggable_2" ).draggable();
    $( "#droppable" ).droppable({
        drop: function( event, ui ) {
            $( this )
                .addClass( "ui-state-highlight" )
                .find( "p" )
                .html( "Dropped!" );
        }
    });
} );
$( function() {
    $( "#draggable_x, #draggable_x_1, #draggable_x_2" ).draggable();
    $( "#droppable_x" ).droppable({
        drop: function( event, ui ) {
            $( this )
                .addClass( "ui-state-highlight-x" )
                .find( "p" )
                .html( "Dropped!" );
        }
    });
    $( "#draggable_x, #draggable_x_1, #draggable_x_2" ).draggable();
    $( "#droppable_x_2" ).droppable({
        drop: function( event, ui ) {
            $( this )
                .addClass( "ui-state-highlight-x" )
                .find( "p" )
                .html( "Dropped!" );
        }
    });
} );