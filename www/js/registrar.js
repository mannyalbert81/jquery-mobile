$(document).on("ready",ini);

function ini()
{
	$('#parent').on('click', '#child',afiliar);
}

function afiliar()
{
	$.ajax({
		   type: 'POST',
		   url: '186.4.203.42:4000/HolaServicio',
		   data:{}, 
		   contentType: 'application/json; utf-8',
		   dataType: 'json',
		   success: function (data) {
		       if (data.d != null) {
		         alert('en esta seccion se muestra el resultado: '+data.d);
		     }
		  },
		   error: function (jqXHR, textStatus, errorThrown) {
		 }

		});
}
