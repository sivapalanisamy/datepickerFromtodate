$(".js-from-date").datepicker({
        dateFormat: 'dd/mm/yy',
        changeMonth: true,
        changeYear: true,
        maxDate: '0',
        onClose: function( selectedDate ) {
        jQuery( ".js-to-date" ).datepicker( "option", "minDate", selectedDate );
        }
    });
  $(".js-to-date").datepicker({
      dateFormat: 'dd/mm/yy',
      changeMonth: true,
      changeYear: true,
      maxDate: '0',
      onClose: function( selectedDate ) {
      jQuery( ".js-from-date" ).datepicker( "option", "maxDate", selectedDate );
      }
  });
