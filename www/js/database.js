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

    alert("success!");

}
