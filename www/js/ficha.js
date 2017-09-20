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
	tx.executeSql("CREATE TABLE IF NOT EXISTS usuarios (id INTEGER PRIMARY KEY AUTOINCREMENT , nombres_usuarios TEXT NOT NULL, apellidos_usuarios TEXT NOT NULL, usuario_usuarios TEXT NOT NULL, clave_usuarios TEXT NOT NULL);");
	tx.executeSql("DELETE FROM usuarios;");
}

function traeFichas()
{
	
}


function info(tx)
{
	
	
	//tx.executeSql('CREATE TABLE IF NOT EXISTS fichas_service (id_fichas_service INTEGER PRIMARY KEY AUTOINCREMENT, id_fichas INTEGER NOT NULL, nombre_fichas TEXT NOT NULL, encabezado_tabla_fichas TEXT NOT NULL, farmacocinetica_fichas TEXT NOT NULL, accion_terapeutica_fichas TEXT NOT NULL, clasificacion_farmacologica_fichas TEXT NOT NULL, forma_terapeutica_fichas TEXT NOT NULL, indicaciones_uso_fichas TEXT NOT NULL, interacciones_fichas TEXT NOT NULL, contraindicaciones_fichas TEXT NOT NULL, periodo_retiro_fichas TEXT NOT NULL, advertencias_fichas TEXT NOT NULL, presentacion_fichas TEXT NOT NULL, registro_sanitario_fichas TEXT NOT NULL, id_fichas_fotos INTEGER NOT NULL, consultas_fichas INTEGER NOT NULL, buscador TEXT NOT NULL, mecanismo_accion_fichas TEXT NOT NULL, efectos_colaterales_fichas TEXT NOT NULL, conservacion_fichas TEXT NOT NULL, ingredientes_fichas TEXT NOT NULL, tipo_alimento_fichas TEXT NOT NULL, encabezado_dosificacion_fichas TEXT NOT NULL, tipo_ficha TEXT NOT NULL, tabla_formas_administracion TEXT NOT NULL, tabla_laboratorios TEXT NOT NULL, tabla_distribuidores TEXT NOT NULL, tabla_composicion TEXT NOT NULL, tabla_dosificacion TEXT NOT NULL)');
	tx.executeSql("CREATE TABLE IF NOT EXISTS usuarios (id INTEGER PRIMARY KEY AUTOINCREMENT , nombres_usuarios TEXT NOT NULL, apellidos_usuarios TEXT NOT NULL, usuario_usuarios TEXT NOT NULL, clave_usuarios TEXT NOT NULL)");
	//tx.executeSql("DELETE FROM usuarios");
	
	var _nombres_usuarios="Maycol Flores";
	var _apellidos_usuarios ="Rosabal Gutiérrez";
	var _usuario_usuarios="JASON";
	var _clave_usuarios="JASON";
	
    var executeQuery = "INSERT INTO usuarios(nombres_usuarios,apellidos_usuarios, usuario_usuarios, clave_usuarios) VALUES (?,?,?,?)";
    
    tx.executeSql(executeQuery, [ _nombres_usuarios,  _apellidos_usuarios, _usuario_usuarios, _clave_usuarios],insertado,errIns);
    
	$.ajax({
		   type: 'POST',
		   url: base_url+pag_service,
		   data:{action:'consulta'},
		   dataType: 'json',
		   success: function (x) {
			   
			   console.log(x);
			  
			   for(var i=0;i<=x.length;i++){
				   
				  /* var _id_fichas=x[i]["id_fichas"];
				   var _nombre_fichas=x[i]["nombre_fichas"];
				   var _encabezado_tabla_fichas=x[i]["encabezado_tabla_fichas"];
				   var _farmacocinetica_fichas=x[i]["farmacocinetica_fichas"];
				   var _accion_terapeutica_fichas=x[i]["accion_terapeutica_fichas"];
				   var _clasificacion_farmacologica_fichas=x[i]["clasificacion_farmacologica_fichas"];
				   var _forma_terapeutica_fichas=x[i]["forma_terapeutica_fichas"];
				   var _indicaciones_uso_fichas=x[i]["indicaciones_uso_fichas"];
				   var _interacciones_fichas=x[i]["interacciones_fichas"];
				   var _contraindicaciones_fichas=x[i]["contraindicaciones_fichas"];
				   var _periodo_retiro_fichas=x[i]["periodo_retiro_fichas"];
				   var _advertencias_fichas=x[i]["advertencias_fichas"];
				   var _presentacion_fichas=x[i]["presentacion_fichas"];
				   var _registro_sanitario_fichas=x[i]["registro_sanitario_fichas"];
				   var _id_fichas_fotos=x[i]["id_fichas_fotos"];
				   var _consultas_fichas=x[i]["consultas_fichas"];
				   var _buscador=x[i]["buscador"];
				   var _mecanismo_accion_fichas=x[i]["mecanismo_accion_fichas"];
				   var _efectos_colaterales_fichas=x[i]["efectos_colaterales_fichas"];
				   var _conservacion_fichas=x[i]["conservacion_fichas"];
				   var _ingredientes_fichas=x[i]["ingredientes_fichas"];
				   var _tipo_alimento_fichas=x[i]["tipo_alimento_fichas"];
				   var _encabezado_dosificacion_fichas=x[i]["encabezado_dosificacion_fichas"];
				   var _tipo_ficha=x[i]["tipo_ficha"];
				   var _tabla_formas_administracion=x[i]["tabla_formas_administracion"];
				   var _tabla_laboratorios=x[i]["tabla_laboratorios"];
				   var _tabla_distribuidores=x[i]["tabla_distribuidores"];
				   var _tabla_composicion=x[i]["tabla_composicion"];
				   var _tabla_dosificacion=x[i]["tabla_dosificacion"];
				   */
				   /*
				   var _id_fichas=1;
				   var _nombre_fichas="sdfsdf";
				   var _encabezado_tabla_fichas="sd";
				   var _farmacocinetica_fichas="sd";
				   var _accion_terapeutica_fichas="sd";
				   var _clasificacion_farmacologica_fichas="sd";
				   var _forma_terapeutica_fichas="sd";
				   var _indicaciones_uso_fichas="sd";
				   var _interacciones_fichas="sd";
				   var _contraindicaciones_fichas="sd";
				   var _periodo_retiro_fichas="sd";
				   var _advertencias_fichas="sd";
				   var _presentacion_fichas="sd";
				   var _registro_sanitario_fichas="sd";
				   var _id_fichas_fotos=2;
				   var _consultas_fichas=2;
				   var _buscador="sd";
				   var _mecanismo_accion_fichas="sd";
				   var _efectos_colaterales_fichas="sd";
				   var _conservacion_fichas="sd";
				   var _ingredientes_fichas="sd";
				   var _tipo_alimento_fichas="sd";
				   var _encabezado_dosificacion_fichas="sd";
				   var _tipo_ficha="sd";
				   var _tabla_formas_administracion="sd";
				   var _tabla_laboratorios="sd";
				   var _tabla_distribuidores="sd";
				   var _tabla_composicion="sd";
				   var _tabla_dosificacion="sd";
				   
				   var executeQuery = "INSERT INTO fichas_service(id_fichas, nombre_fichas, encabezado_tabla_fichas, farmacocinetica_fichas, accion_terapeutica_fichas, clasificacion_farmacologica_fichas, forma_terapeutica_fichas, indicaciones_uso_fichas, interacciones_fichas, contraindicaciones_fichas, periodo_retiro_fichas, advertencias_fichas, presentacion_fichas, registro_sanitario_fichas, id_fichas_fotos, consultas_fichas, buscador, mecanismo_accion_fichas, efectos_colaterales_fichas, conservacion_fichas, ingredientes_fichas, tipo_alimento_fichas, encabezado_dosificacion_fichas, tipo_ficha, tabla_formas_administracion, tabla_laboratorios, tabla_distribuidores, tabla_composicion, tabla_dosificacion) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
				    tx.executeSql(executeQuery,[_id_fichas, _nombre_fichas, _encabezado_tabla_fichas, _farmacocinetica_fichas, _accion_terapeutica_fichas, _clasificacion_farmacologica_fichas, _forma_terapeutica_fichas, _indicaciones_uso_fichas, _interacciones_fichas, _contraindicaciones_fichas, _periodo_retiro_fichas, _advertencias_fichas, _presentacion_fichas, _registro_sanitario_fichas, _id_fichas_fotos, _consultas_fichas, _buscador, _mecanismo_accion_fichas, _efectos_colaterales_fichas, _conservacion_fichas, _ingredientes_fichas, _tipo_alimento_fichas, _encabezado_dosificacion_fichas, _tipo_ficha, _tabla_formas_administracion, _tabla_laboratorios, _tabla_distribuidores, _tabla_composicion, _tabla_dosificacion],
				    	function(tx, result) {
				    		//alert('Insertar Local');
				    	},
				    	function(error){
				    		alert('Error al Cargar Fichas');
				    });
				  }*/
				   
				   
				    
			   }
			    show_fichas();
			      
			},
			error: function (jqXHR, textStatus, errorThrown) {
			     $("#fichas_registradas").html("Ocurrio un error al cargar la informacion de Usuarios..."+errorCB);
		 }

		});
      }



function show_fichas(){
	db.transaction(function(transaction) {
	transaction.executeSql('SELECT * FROM usuarios', [], function (tx1, results) {
	var id = "";
	var nombre = "";

	//<!--Display the table head-->
	var pair="<tr><th data-priority=\"1\"><center>Id</center></th><th data-priority=\"1\"><center>Nombre</center></th><</tr>";
	var i=0;

	//<!--results.rows.length to get the total number of rows stored in the database-->
	var len = results.rows.length, i;
	for (i=0; i<=len-1; i++) {

		//<!--Fetching the 'name' from the database-->
		id = results.rows.item(i).id;
		nombre = results.rows.item(i).nombres_usuarios;
	//<!--Fetching the 'id' from the database-->
	id = results.rows.item(i).id;

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
    alert("Error maycol: "+err.code);
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
