
var base_url = 'http://192.168.10.157:4000/Vademano/webservices/';
var pag_service = 'FichaService.php' ;


$(document).on("ready",ini);

function ini()
{	
	$('#btnPrueba').click(info);
}

function info()
{
	$.ajax({
		   type: 'POST',
		   url: base_url+pag_service,
		   data:{action:'consulta'},
		   dataType: 'json',
		   success: function (data) {
			   console.log('entro');
		  },
		   error: function (jqXHR, textStatus, errorThrown) {
		 }

		});
}
