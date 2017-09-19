$(document).on("ready",ini);

function ini()
{
	
	alert('Creando Database');
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
    
    
    
    
    var _id_fichas =1;
    var _nombre_fichas="Manuel Alberto";
    var _encabezado_tabla_fichas="Manuel Alberto";
    var _farmacocinetica_fichas ="Manuel Alberto";
    var _accion_terapeutica_fichas="Manuel Alberto";
    var _clasificacion_farmacologica_fichas ="Manuel Alberto";
    var _forma_terapeutica_fichas ="Manuel Alberto";
    var _indicaciones_uso_fichas ="Manuel Alberto";
    var _interacciones_fichas ="Manuel Alberto";
    var _contraindicaciones_fichas ="Manuel Alberto";
    var _periodo_retiro_fichas ="Manuel Alberto";
    var _advertencias_fichas ="Manuel Alberto";
    var _presentacion_fichas ="Manuel Alberto";
    var _registro_sanitario_fichas ="Manuel Alberto";
    var _id_fichas_fotos = 1;
    var _consultas_fichas = 1;
    var _buscador ="Manuel Alberto";
    var _mecanismo_accion_fichas ="Manuel Alberto";
    var _efectos_colaterales_fichas ="Manuel Alberto";
    var _conservacion_fichas ="Manuel Alberto";
    var _ingredientes_fichas ="Manuel Alberto";
    var _tipo_alimento_fichas ="Manuel Alberto";
    var _encabezado_dosificacion_fichas ="Manuel Alberto";
    var _tipo_ficha ="P";
    var _tabla_formas_administracion ="Manuel Alberto";
    var _tabla_laboratorios ="Manuel Alberto";
    var _tabla_distribuidores ="Manuel Alberto";
    var _tabla_composicion ="Manuel Alberto";
    var _tabla_dosificacion ="Manuel Alberto";
   
    
 var executeQuery = "INSERT INTO fichas_service(id_fichas, nombre_fichas, encabezado_tabla_fichas, farmacocinetica_fichas, accion_terapeutica_fichas, clasificacion_farmacologica_fichas, forma_terapeutica_fichas, indicaciones_uso_fichas, interacciones_fichas, contraindicaciones_fichas, periodo_retiro_fichas, advertencias_fichas, presentacion_fichas, registro_sanitario_fichas, id_fichas_fotos, consultas_fichas, buscador, mecanismo_accion_fichas, efectos_colaterales_fichas, conservacion_fichas, ingredientes_fichas, tipo_alimento_fichas, encabezado_dosificacion_fichas, tipo_ficha, tabla_formas_administracion, tabla_laboratorios, tabla_distribuidores, tabla_composicion, tabla_dosificacion) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
    
    tx.executeSql(executeQuery, [ _id_fichas, _nombre_fichas, _encabezado_tabla_fichas, _farmacocinetica_fichas, _accion_terapeutica_fichas, _clasificacion_farmacologica_fichas, _forma_terapeutica_fichas, _indicaciones_uso_fichas, _interacciones_fichas, _contraindicaciones_fichas, _periodo_retiro_fichas, _advertencias_fichas, _presentacion_fichas, _registro_sanitario_fichas, _id_fichas_fotos, _consultas_fichas, _buscador, _mecanismo_accion_fichas, _efectos_colaterales_fichas, _conservacion_fichas, _ingredientes_fichas, _tipo_alimento_fichas, _encabezado_dosificacion_fichas, _tipo_ficha, _tabla_formas_administracion, _tabla_laboratorios, _tabla_distribuidores, _tabla_composicion, _tabla_dosificacion],
    	function(tx, result) {
    		//alert('Inserted');
    	},
    	function(error){
    		alert('Error al Cargar Fichas');
    });
    
    
}


function errorCB(err) {
    alert("Error processing SQL: "+err.code);
}

//function will be called when process succeed
function successCB() {
    alert("success!");
    show();
    //db.transaction(queryDB,errorCB);
}
/*
//select all from SoccerPlayer
function queryDB(tx){
    tx.executeSql('SELECT * FROM SoccerPlayer',[],querySuccess,errorCB);
}

function querySuccess(tx,result){
    $('#SoccerPlayerList').empty();
    $.each(result.rows,function(index){
        var row = result.rows.item(index);
        $('#SoccerPlayerList').append('<li><a href="#"><h3 class="ui-li-heading">'+row['Name']+'</h3><p class="ui-li-desc">Club '+row['Club']+'</p></a></li>');
    });

    $('#SoccerPlayerList').listview();
}


function show(){
	db.transaction(function(transaction) {
	transaction.executeSql('SELECT * FROM SoccerPlayer', [], function (tx, results) {
	var name = "";
	var club = "";

	//<!--Display the table head-->
	var pair="<tr><th data-priority=\"1\"><center>Name</center></th><th data-priority=\"2\"><center>Club</center></th><</tr>";
	var i=0;

	//<!--results.rows.length to get the total number of rows stored in the database-->
	var len = results.rows.length, i;
	for (i=0; i<=len-1; i++) {

		//<!--Fetching the 'name' from the database-->
	name = results.rows.item(i).name;
	club = results.rows.item(i).club;
	//<!--Fetching the 'id' from the database-->
	id = results.rows.item(i).id;

	//<!--Displaying all rows of the database in the table-->
	pair += "<tr><td><center>"+name+"</center></td><td><center>"+club+"</center></td></tr>";
	}
	if (pair == "<tr><th>Name</th><th>Club</th></tr>") {
	pair += "<tr><td><i>empty</i></td><td><i>empty</i></td></tr>";
	}
	$("#myTable").html(pair);
	}, null);
	});
}





	//<!--window.sqlitePlugin.openDatabase creates/open a non existing/existing database-->
	 
	
	//var db = window.sqlitePlugin.openDatabase({name: "my.db"});
/*
	show();

db.transaction(function(tx) {
tx.executeSql('CREATE TABLE IF NOT EXISTS mydata (id integer primary key, name text, email text)');
});

//<!--Method to insert new row in the database-->
$(document).on('click', '#creat', function(){
	
	alert('Mi error');
	/*
var name = $("#name").val();
var email = $("#email").val();
db.transaction(function(transaction) {
var executeQuery = "INSERT INTO mydata (name, email) VALUES (?,?)";
transaction.executeSql(
		executeQuery, [name,email] , function(tx, result) 
		{
			show();
		}, function(error)
			{
				//filter(function(aSome) {alert('Error occurred') });
			}
		);
		
});


});
*/

//<!--Display all rows stored in the database-->


/*

//<!--Method to delete any row from the database-->
$(document).on('click', '#delete', function(){
var id = $(this).attr("data");
db.transaction(function(transaction) {
transaction.executeSql("DELETE FROM mydata where id=?", [id],
function(tx, result) {
show();
},
function(error){
// alert('Something went Wrong');
});
});
});

//<!--Method to update the values of any row in the database-->
$(document).on('click', '#upd', function(){
var id = $("#id").val();
var name = $("#uname").val();
var email = $("#uemail").val();
db.transaction(function(transaction) {
var executeQuery = "";
transaction.executeSql("UPDATE mydata SET name=?, email=? WHERE id=?", [name,email,id],
function(tx, result) {alert('Updated successfully');
show();
},
function(error){alert('Something went Wrong');});
});
});
$(document).on('click', '.update', function(){
var id = $(this).attr('data-custom');
$("#id").val(id);
db.transaction(function(transaction) {
transaction.executeSql('SELECT name,email FROM mydata where id=?', [id], function (tx, results) {
var name = results.rows.item(0).name;
var email = results.rows.item(0).email;
$("#uname").val(name);
$("#uemail").val(email);
},
function(error){
alert('Something went Wrong');
});
});
});

//<!--Method to clear all rows from the database-->
$(document).on('click', '#clearall', function(){
db.transaction(function(transaction) {
transaction.executeSql("DELETE FROM mydata", [],
function(tx, result) {alert('Delete successfully');
show();
},
function(error){alert('Something went Wrong');});
});
});
}


*/