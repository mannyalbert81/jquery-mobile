var base_url = 'http://localhost:4000/Vademano/webservices/';

var base_url = 'http://localhost:4000/Vademano/webservices/';

var pag_service = 'FichaService.php' ;
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
	var tblFichas = 'CREATE TABLE IF NOT EXISTS fichas_service';
	tblFichas +='(id_fichas_service INTEGER PRIMARY KEY AUTOINCREMENT, id_fichas INTEGER  , nombre_fichas TEXT  ,'; 
	tblFichas +='encabezado_tabla_fichas TEXT  , farmacocinetica_fichas TEXT  , accion_terapeutica_fichas TEXT  ,'; 
	tblFichas +='clasificacion_farmacologica_fichas TEXT  , forma_terapeutica_fichas TEXT  , indicaciones_uso_fichas TEXT  ,'; 
	tblFichas +='interacciones_fichas TEXT  , contraindicaciones_fichas TEXT  , periodo_retiro_fichas TEXT  ,'; 
	tblFichas +='advertencias_fichas TEXT  , presentacion_fichas TEXT  , registro_sanitario_fichas TEXT  ,'; 
	tblFichas +='id_fichas_fotos INTEGER  , consultas_fichas INTEGER  , buscador TEXT  , mecanismo_accion_fichas TEXT  ,';
	tblFichas +='efectos_colaterales_fichas TEXT  , conservacion_fichas TEXT  , ingredientes_fichas TEXT  ,'; 
	tblFichas +='tipo_alimento_fichas TEXT  , encabezado_dosificacion_fichas TEXT  , tipo_ficha TEXT  ,'; 
	tblFichas +='tabla_formas_administracion TEXT  , tabla_laboratorios TEXT  , tabla_distribuidores TEXT  ,';
	tblFichas +='tabla_composicion TEXT  , tabla_dosificacion TEXT  )';
	
	var tblImagen = 'CREATE TABLE IF NOT EXISTS ficha_foto ';
		tblImagen += '(id_fichas_fotos INTEGER PRIMARY KEY AUTOINCREMENT,';
		tblImagen += 'id_fichas INTEGER ,foto TEXT)';
		
	tx.executeSql(tblFichas);
	tx.executeSql(tblImagen);
	tx.executeSql("DELETE FROM fichas_service;");
	traeFichas();
	traeImagen();
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


function show_fichas(){
	db.transaction(function(transaction) {
	transaction.executeSql('SELECT * FROM fichas_service ', [], function (tx, results) {
	var id = "";
	var nombre = "";

	//<!--Display the table head-->
	var pair="<tr><th data-priority=\"1\"><center>Id</center></th><th data-priority=\"1\"><center>Nombre</center></th><</tr>";
	var i=0;

	//<!--results.rows.length to get the total number of rows stored in the database-->
	var len = results.rows.length, i;
	for (i=0; i<=len-1; i++) {

		//<!--Fetching the 'name' from the database-->
		id = results.rows.item(i).id_fichas;
		nombre = results.rows.item(i).nombre_fichas;
	

	//<!--Displaying all rows of the database in the table-->
	pair += "<tr><td><center>"+id+"</center></td><td><center>"+nombre+"</center></td></tr>";
	}
	if (pair == "<tr><th>Id</th><th>Nombre</th></tr>") {
	pair += "<tr><td><i>empty</i></td><td><i>empty</i></td></tr>";
	}
	$("#myTable1").html(pair);
	}, null);
	});
}


function errorCB(err) {
    console.log('error encontrado');
}
function successCB (){
}

function traeImagen()
{
	var queryIns = 'INSERT INTO ficha_foto(id_fichas, foto) VALUES (?,?)';
	// recolecta los valores que inserto el usuario
	var datosUsuario ='';	
  	archivoValidacion = "http://localhost:5000/Vademano/webservices/FichaImgService.php?jsoncallback=?"
  	$.getJSON( archivoValidacion, { imagen:datosUsuario })
	.done(function(x) {
		
		 $.each(x, function(i, j) {
			   //console.log( j.id_fichas );
			   db.transaction(function (tx) {
				 tx.executeSql(queryIns,[j.id_fichas,j.foto_fichas_fotos ],function (tx, res) {},function (e) {alert("ERROR: " + e.message);});
			   });
		 });
	})
}



/*FALLOS*/
/*//tx.executeSql('INSERT INTO usuarios (nombres_usuarios, apellidos_usuarios,usuario_usuarios,clave_usuarios) VALUES (?,?,?,?)',[],errorCB(tx),successCB);*/
//tx.executeSql('INSERT INTO usuarios (nombres_usuarios, apellidos_usuarios,usuario_usuarios,clave_usuarios) VALUES ("a","b","c","d")',[],successCB,errorCB(tx));					
/******PARA COMPROBAR**********/
/*
tx.executeSql(queryIns,[j.id_fichas,
j.nombre_fichas, j.id_fichas,j.nombre_fichas, j.id_fichas,j.nombre_fichas, j.id_fichas,j.nombre_fichas, j.id_fichas,j.nombre_fichas, j.id_fichas,j.nombre_fichas, j.id_fichas,j.nombre_fichas, j.id_fichas,j.nombre_fichas, j.id_fichas,j.nombre_fichas, j.id_fichas,j.nombre_fichas, j.id_fichas,j.nombre_fichas, j.id_fichas,j.nombre_fichas, j.id_fichas,j.nombre_fichas, j.id_fichas,j.nombre_fichas, j.id_fichas ],function (tx, res) {},function (e) {alert("ERROR: " + e.message);});
*/