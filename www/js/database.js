$(document).on("ready",ini);

function ini()
{
	
	//alert('Creando Database');
}

//<!--Calling onDeviceReady method-->
document.addEventListener("deviceready", onDeviceReady, false);
var db = window.openDatabase("vade.db", "1.0", "MY DB", 200000); //will create database Dummy_DB or open it


function onDeviceReady() {

	db.transaction(populateDB, errorCB, successCB);
}


//create table and insert some record
function populateDB(tx) {

	
	//creamos  las tablas
	tx.executeSql('CREATE TABLE IF NOT EXISTS usuarios (id INTEGER PRIMARY KEY AUTOINCREMENT , nombres_usuarios TEXT NOT NULL, apellidos_usuarios TEXT NOT NULL, usuario_usuarios TEXT NOT NULL, clave_usuarios TEXT NOT NULL)');
	tx.executeSql('CREATE TABLE IF NOT EXISTS fichas_service (id_fichas_service INTEGER PRIMARY KEY AUTOINCREMENT, id_fichas INTEGER NOT NULL, nombre_fichas TEXT NOT NULL, encabezado_tabla_fichas TEXT NOT NULL, farmacocinetica_fichas TEXT NOT NULL, accion_terapeutica_fichas TEXT NOT NULL, clasificacion_farmacologica_fichas TEXT NOT NULL, forma_terapeutica_fichas TEXT NOT NULL, indicaciones_uso_fichas TEXT NOT NULL, interacciones_fichas TEXT NOT NULL, contraindicaciones_fichas TEXT NOT NULL, periodo_retiro_fichas TEXT NOT NULL, advertencias_fichas TEXT NOT NULL, presentacion_fichas TEXT NOT NULL, registro_sanitario_fichas TEXT NOT NULL, id_fichas_fotos INTEGER NOT NULL, consultas_fichas INTEGER NOT NULL, buscador TEXT NOT NULL, mecanismo_accion_fichas TEXT NOT NULL, efectos_colaterales_fichas TEXT NOT NULL, conservacion_fichas TEXT NOT NULL, ingredientes_fichas TEXT NOT NULL, tipo_alimento_fichas TEXT NOT NULL, encabezado_dosificacion_fichas TEXT NOT NULL, tipo_ficha TEXT NOT NULL, tabla_formas_administracion TEXT NOT NULL, tabla_laboratorios TEXT NOT NULL, tabla_distribuidores TEXT NOT NULL, tabla_composicion TEXT NOT NULL, tabla_dosificacion TEXT NOT NULL)');
	
	
	var _id = 1;
	var _nombres_usuarios="Manuel Alberto";
	var _apellidos_usuarios ="Rosabal Gutiérrez";
	var _usuario_usuarios="JASON";
	var _clave_usuarios="JASON";
	
    var executeQuery = "INSERT INTO usuarios(nombres_usuarios,apellidos_usuarios, usuario_usuarios, clave_usuarios) VALUES (?,?,?,?)";
    
    tx.executeSql(executeQuery, [ _nombres_usuarios,  _apellidos_usuarios, _usuario_usuarios, _clave_usuarios],
    	function(tx, result) {
    		//alert('Inserted');
    	},
    	function(error){
    		alert('Error al cargar Usuarios');
    });
    
    
    
}  
   
    
 


function errorCB(err) {
    alert("Error processing SQL: "+err.code);
}

//function will be called when process succeed
function successCB() {
  // alert("success!");
    //show();
    //db.transaction(queryDB,errorCB);
}
