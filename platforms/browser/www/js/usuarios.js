var base_url = 'http://localhost:5000/Vademano/webservices/';
var pag_service = 'LoginService.php' ;
//var base_url = 'http://186.4.203.42:4000/Vademano/webservices/';
//var pag_service = 'FichaService.php' ;

$(document).on("ready",ini);

function ini()
{
	
}

document.addEventListener("deviceready", onDeviceReady, false);

var db = window.openDatabase("vade.db", "1.0", "MY DB", 200000); //crea o abre la base

function onDeviceReady() 
{
	db.transaction(init_pag, errorCB, successCB);
}

function init_pag(tx)
{
	
	//tx.executeSql('DROP TABLE IF EXISTS fichas_service');
		
	traeFichas();
}

function traeFichas()
{
	
	//var query='INSERT INTO usuarios (nombres_usuarios, apellidos_usuarios,usuario_usuarios,clave_usuarios) VALUES (?,?,?,?)';
	var queryIns = 'INSERT INTO fichas_service(id_fichas, nombre_fichas, encabezado_tabla_fichas, farmacocinetica_fichas, accion_terapeutica_fichas, clasificacion_farmacologica_fichas, forma_terapeutica_fichas, indicaciones_uso_fichas, interacciones_fichas, contraindicaciones_fichas, periodo_retiro_fichas, advertencias_fichas, presentacion_fichas, registro_sanitario_fichas, id_fichas_fotos, consultas_fichas, buscador, mecanismo_accion_fichas, efectos_colaterales_fichas, conservacion_fichas, ingredientes_fichas, tipo_alimento_fichas, encabezado_dosificacion_fichas, tipo_ficha, tabla_formas_administracion, tabla_laboratorios, tabla_distribuidores, tabla_composicion, tabla_dosificacion) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
	   
	$.ajax({
		   type: 'POST',
		   url: base_url+pag_service,
		   data:{action:'consulta'},
		   dataType: 'json',
		   success: function (x) {
			   
			   $.each(x, function(i, j) {
				   //console.log( j.nombre_fichas );
				   db.transaction(function (tx) {
					   
					   tx.executeSql(queryIns,[j.id_fichas,j.nombre_fichas, j.encabezado_tabla_fichas,
					                           j.farmacocinetica_fichas, j.accion_terapeutica_fichas,
					                           j.clasificacion_farmacologica_fichas, j.forma_terapeutica_fichas,
					                           j.indicaciones_uso_fichas, j.interacciones_fichas,
					                           j.contraindicaciones_fichas, j.periodo_retiro_fichas,
					                           j.advertencias_fichas, j.presentacion_fichas,
					                           j.registro_sanitario_fichas, j.id_fichas_fotos,
					                           j.consultas_fichas, j.buscador,j.mecanismo_accion_fichas,
					                           j.efectos_colaterales_fichas,j.conservacion_fichas,
					                           j.ingredientes_fichas,j.tipo_alimento_fichas, j.encabezado_dosificacion_fichas,
					                           j.tipo_ficha, j.tabla_formas_administracion,j.tabla_laboratorios,
					                           j.tabla_distribuidores,j.tabla_composicion, j.tabla_dosificacion ],function (tx, res) {},function (e) {alert("ERROR: " + e.message);});
					 
				   });
				  });
			   
			   //show_fichas();
			  
			   } ,
			error: function (jqXHR, textStatus, errorThrown) {
			     $("#fichas_registradas").html("Ocurrio un error al cargar la informacion de Usuarios..."+jqXHR);
		 }

		});
}


function errorCB(err) {
    console.log('error encontrado');
}
function successCB (){
}


/*FALLOS*/
/*//tx.executeSql('INSERT INTO usuarios (nombres_usuarios, apellidos_usuarios,usuario_usuarios,clave_usuarios) VALUES (?,?,?,?)',[],errorCB(tx),successCB);*/
//tx.executeSql('INSERT INTO usuarios (nombres_usuarios, apellidos_usuarios,usuario_usuarios,clave_usuarios) VALUES ("a","b","c","d")',[],successCB,errorCB(tx));					
/******PARA COMPROBAR**********/
/*
tx.executeSql(queryIns,[j.id_fichas,
j.nombre_fichas, j.id_fichas,j.nombre_fichas, j.id_fichas,j.nombre_fichas, j.id_fichas,j.nombre_fichas, j.id_fichas,j.nombre_fichas, j.id_fichas,j.nombre_fichas, j.id_fichas,j.nombre_fichas, j.id_fichas,j.nombre_fichas, j.id_fichas,j.nombre_fichas, j.id_fichas,j.nombre_fichas, j.id_fichas,j.nombre_fichas, j.id_fichas,j.nombre_fichas, j.id_fichas,j.nombre_fichas, j.id_fichas,j.nombre_fichas, j.id_fichas ],function (tx, res) {},function (e) {alert("ERROR: " + e.message);});
*/