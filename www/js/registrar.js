/***declaracion variables***/
//var base_url = 'http://vademano.masoft.net/';
//var pag_service = 'afiliadoService.php'
//var base_url = 'http://localhost:5000/Vademano/';
//var base_url = 'http://186.4.203.42:4000/Vademano/';
//var pag_service = 'index.php?controll
//var pag_service = 'index.php?controller=Afiliaciones&action=registraAfiliadoMobil' ;
//var base_url = 'http://localhost:5000/vademano/webservices/';
//var pag_service = 'afiliadoService.php' ;
var base_url = 'http://186.4.203.42:4000/Vademano/webservices/';
var pag_service = 'afiliadoService.php' ;


$(document).on("ready",ini);

function ini()
{	
	$('#btnRegistrar').click(afiliar);
}

function afiliar()
{
	dataenviar={action:'insertar',nombres:$('#txtNombres').val(),
			apellidos:$('#txtApellidos').val(),email:$('#txtEmail').val(),
			telefono:$('#txtTelefono').val(),celular:$('#txtCelular').val(),
			clave:$('#txtPwd').val()}
	$.ajax({
		   type: 'POST',
		   //dataType:'text',
		   crossDomain: true,
		   url: base_url+pag_service,
		   data:dataenviar,
		   success: function (data) {
			   //console.log('llego');
			   console.log(data);
			   //console.log(data.listaUsuario[0].nombre);
		  },
		   error: function (jqXHR, textStatus, errorThrown) {
		 }

		});
}

/*
$.ajax({
type: 'POST',
url: base_url+pag_service,
data:{'action':'insertar'},
dataType: 'json',
success: function (data) {
	   console.log('llego');
	   console.log(data.listaUsuario[0].nombre);
},
error: function (jqXHR, textStatus, errorThrown) {
}

});*/