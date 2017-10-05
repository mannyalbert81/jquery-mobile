document.addEventListener("deviceready", onDeviceReady, false);
var db = window.openDatabase("vade.db", "1.0", "MY DB", 200000);

$(document).on("ready",ini);

function ini()
{
	var querySelect = "SELECT * FROM usuarios LIMIT 1";
	db.transaction(function(transaction) {
		transaction.executeSql(querySelect , [], function (tx, results) {
			
			if(results.rows.length>0){
				$('#txtNombres').val(results.rows.item(0).nombres_usuario);
				$('#txtApellidos').val(results.rows.item(0).apellidos_usuario);
				$('#txtTelefono').val(results.rows.item(0).telefono_usuario);
				$('#txtCelular').val(results.rows.item(0).celular_usuario);
				$('#txtEmail').val(results.rows.item(0).usuario_usuario);
				console.log(results);
				
			}else{
				console.log('no hay datos');
			}
			
			
			
		}, null);
	});
}


function onDeviceReady(){}

function enviarE(){
	
	var base_url = 'http://186.4.203.42:4000/Vademano/webservices/';
	var pag_service = 'MailService.php?jsoncallback=?' ;

	$.getJSON( base_url+pag_service, { id_usuario:'19'})
	.done(function(x) {
		console.log(x[0].mensaje);
		if(x[0].estatus==1)
			{
			console.log('llego log')
			errorEnviar(19,'', '')
			}else{
				console.log(x[0].estatus)
			}
		
	});
}

function errorEnviar(_usuario,_correo,_mensaje){
	
	var tblCorreo = 'CREATE TABLE IF NOT EXISTS correousuario ' ;
	tblCorreo += '(id_cusuario INTEGER AUTOINCREMENT, id_usuario INTEGER, correo TEXT,';
	tblCorreo += 'mensaje TEXT)';
	var queryInsert = "INSERT INTO correousuario (id_usuario,correo,mensaje) VALUES (?,?,?) ";
	db.transaction(function (tx) {
		tx.executeSql(tblCorreo,[],function(tx,result){},function(error){alert('Error al iniciar correo')});
		tx.executeSql(queryInsert , [_usuario,_correo,_mensaje], function (tx, results) {}, null);
	});
}