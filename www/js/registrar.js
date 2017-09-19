/***declaracion variables***/
var base_url = 'http://vademano.masoft.net/webservices/';
var pag_service = 'afiliadoService.php'


$(document).on("ready",ini);

function ini()
{	
	$('#parent').on('click', '#child',afiliar);
}

function afiliar()
{
	$.ajax({
		   type: 'POST',
		   url: base_url+pag_service,
		   data:{action:'insertar'}, 
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
