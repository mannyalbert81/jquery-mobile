var base_url = 'http://localhost:5000/Vademano/webservices/';
var pag_service = 'FichaService.php' ;
var fichas = null;

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
	var tblFichas = 'CREATE TABLE IF NOT EXISTS fichas_service';
		tblFichas +='(id_fichas_service INTEGER PRIMARY KEY AUTOINCREMENT, id_fichas INTEGER NOT NULL, nombre_fichas TEXT NOT NULL,'; 
		tblFichas +='encabezado_tabla_fichas TEXT NOT NULL, farmacocinetica_fichas TEXT NOT NULL, accion_terapeutica_fichas TEXT NOT NULL,'; 
		tblFichas +='clasificacion_farmacologica_fichas TEXT NOT NULL, forma_terapeutica_fichas TEXT NOT NULL, indicaciones_uso_fichas TEXT NOT NULL,'; 
		tblFichas +='interacciones_fichas TEXT NOT NULL, contraindicaciones_fichas TEXT NOT NULL, periodo_retiro_fichas TEXT NOT NULL,'; 
		tblFichas +='advertencias_fichas TEXT NOT NULL, presentacion_fichas TEXT NOT NULL, registro_sanitario_fichas TEXT NOT NULL,'; 
		tblFichas +='id_fichas_fotos INTEGER NOT NULL, consultas_fichas INTEGER NOT NULL, buscador TEXT NOT NULL, mecanismo_accion_fichas TEXT NOT NULL,';
		tblFichas +='efectos_colaterales_fichas TEXT NOT NULL, conservacion_fichas TEXT NOT NULL, ingredientes_fichas TEXT NOT NULL,'; 
		tblFichas +='tipo_alimento_fichas TEXT NOT NULL, encabezado_dosificacion_fichas TEXT NOT NULL, tipo_ficha TEXT NOT NULL,'; 
		tblFichas +='tabla_formas_administracion TEXT NOT NULL, tabla_laboratorios TEXT NOT NULL, tabla_distribuidores TEXT NOT NULL,';
		tblFichas +='tabla_composicion TEXT NOT NULL, tabla_dosificacion TEXT NOT NULL)';
		
	tx.executeSql(tblFichas);
	tx.executeSql("CREATE TABLE IF NOT EXISTS usuarios (id INTEGER PRIMARY KEY AUTOINCREMENT , nombres_usuarios TEXT NOT NULL, apellidos_usuarios TEXT NOT NULL, usuario_usuarios TEXT NOT NULL, clave_usuarios TEXT NOT NULL);");
	tx.executeSql("DELETE FROM fichas_service;");
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
				   console.log( j.farmacocinetica_fichas );
				   db.transaction(function (tx) {
					   
					   tx.executeSql(queryIns,[j.id_fichas,
					                           j.nombre_fichas, j.id_fichas,j.farmacocinetica_fichas, j.id_fichas,j.nombre_fichas, j.id_fichas,j.nombre_fichas, j.id_fichas,j.nombre_fichas, j.id_fichas,j.nombre_fichas, j.id_fichas,j.nombre_fichas, j.id_fichas,j.nombre_fichas, j.buscador,j.nombre_fichas, j.id_fichas,j.nombre_fichas, j.id_fichas,j.nombre_fichas, j.id_fichas,j.nombre_fichas, j.id_fichas,j.tabla_laboratorios, j.id_fichas,j.nombre_fichas, j.id_fichas ],function (tx, res) {},function (e) {alert("ERROR: " + e.message);});
					  /*tx.executeSql(queryIns,[j.id_fichas,j.nombre_fichas,j.encabezado_tabla_fichas,j.farmacocinetica_fichas,
					                          j.accion_terapeutica_fichas,j.clasificacion_farmacologica_fichas,j.forma_terapeutica_fichas,
					                          j.indicaciones_uso_fichas,j.interacciones_fichas,j.contraindicaciones_fichas,j.periodo_retiro_fichas,
					                          j.advertencias_fichas,j.presentacion_fichas,j.registro_sanitario_fichas,j.id_fichas_fotos,
					                          j.consultas_fichas,j.buscador,j.mecanismo_accion_fichas,j.conservacion_fichas,j.ingredientes_fichas,
					                          j.tipo_alimento_fichas,j.encabezado_dosificacion_fichas,j.tipo_ficha,j.tabla_formas_administracion,
					                          j.tabla_laboratorios,j.tabla_distribuidores,j.tabla_composicion,j.tabla_dosificacion,j.id_fichas,j.id_fichas],function (tx, res) {},function (e) {alert("ERROR: " + e.message);});
					*/
				   });
				  });
			 
			   show_fichas();
			  
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
		id = results.rows.item(i).tabla_laboratorios;
		nombre = results.rows.item(i).farmacocinetica_fichas;
	

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
    alert("Error maycol: error al insertar "+err);
}

//function will be called when process succeed
function successCB() {
    //show_fichas();
    //db.transaction(queryDB,errorCB);
}
function insertado(tx,result)
{ console.log(result+'\n'+'insertado');}
function errIns(error)
{console.log(error);}

/*FALLOS*/
/*//tx.executeSql('INSERT INTO usuarios (nombres_usuarios, apellidos_usuarios,usuario_usuarios,clave_usuarios) VALUES (?,?,?,?)',[],errorCB(tx),successCB);*/
//tx.executeSql('INSERT INTO usuarios (nombres_usuarios, apellidos_usuarios,usuario_usuarios,clave_usuarios) VALUES ("a","b","c","d")',[],successCB,errorCB(tx));					
