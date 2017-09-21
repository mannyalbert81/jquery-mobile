var base_url = 'http://localhost:5000/Vademano/webservices/';
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
	var imag2 = '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';
	var jsonIMG = 'R0lGODlhEAAOALMAAOazToeHh0tLS/7LZv/0jvb29t/f3//Ub/';
		jsonIMG+='/ge8WSLf/rhf/3kdbW1mxsbP//mf///yH5BAAAAAAALAAAAAAQAA4AAARe8L1Ekyky67QZ1hLnjM5UUde0ECwLJoExK';
		jsonIMG+='cppV0aCcGCmTIHEIUEqjgaORCMxIC6e0CcguWw6aFjsVMkkIr7g77ZKPJjPZqIyd7sJAgVGoEGv2xsBxqNgYPj/gAwXEQA7';
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