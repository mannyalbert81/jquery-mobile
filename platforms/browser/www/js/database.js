$(document).on("ready",ini);

function ini()
{
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
	var tblUsuarios = 'CREATE TABLE IF NOT EXISTS usuarios (nombre_estado TEXT, id_usuario INTEGER PRIMARY KEY AUTOINCREMENT, nombres_usuario TEXT, apellidos_usuario TEXT, usuario_usuario TEXT, celular_usuario TEXT, telefono_usuario TEXT)';

	
	tx.executeSql(tblUsuarios), [],
    	function(tx, result) {
    		//alert('Inserted');
    	},
    	function(error){
    		alert('Error al crear Tabla Usuarios');
    });
    
}  
   
function errorCB(err) {
    alert("Error processing SQL: "+err.code);
}

//function will be called when process succeed
function successCB() {

    alert("success!");

}
