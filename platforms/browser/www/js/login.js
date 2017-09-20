////local
$(document).on("ready",ini);
function ini()
{
	
	//alert('Logueando');
}
var db;
var dbCreated = false;

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady(){
 db = window.openDatabase("vade.db", "1.0", "MY DB", 200000); //will create database Dummy_DB or open it

function onDeviceReady() {

	//db.transaction(populateDB, errorCB, successCB);


	$(document).on('click', '#ingresar', function(){
		
		alert('Login');
		/*
	var name = $("#usuario").val();
	var clave = $("#clave").val();
    Loguear(name , clave);
	*/

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


function Loguear(name, clave ){
	db.transaction(function(transaction) {
	transaction.executeSql("SELECT * FROM usuarios  WHERE usuario_usuario = '"+ name +"'  AND clave_usuarios = '"+ clave +"' ", [], function (tx, results) {
	var _usuario_usuarios = "";
	var club = "";

	//<!--Display the table head-->
	var i=0;

	//<!--results.rows.length to get the total number of rows stored in the database-->
		var len = results.rows.length, i;
		for (i=0; i<=len-1; i++) {

			//<!--Fetching the 'name' from the database-->
			_usuario_usuarios = results.rows.item(i).usuario_usuarios;
	
			//<!--Fetching the 'id' from the database-->
			id = results.rows.item(i).id;
   
			alert('Usuario: ' + _usuario_usuarios ); 
	});
}





	//<!--window.sqlitePlugin.openDatabase creates/open a non existing/existing database-->

 if (dbCreated)
  {
	 alert("No creada");
  }
 
 else{
	 
	 //alert("creada");
    
    
    
    
    
    $(document).on('click', '#btn-ingresar', function(){
    
    	//alert('Hola');
    	db.transaction(getregistdata, transaction_error);
    
    });
    
    
    
    
    
 }
 
 
 
 
}

function getregistdata(tx){
 
  var sql = "SELECT * FROM usuarios";
  tx.executeSql(sql, [], getlogin_success);
}

function transaction_error(tx, error) {
 alert("Database Error: " + error);
}

function getlogin_success(tx, results){
   var len = results.rows.length;
   for (var i=0; i< len; i++) {  
    var employee = results.rows.item(i);
    var username=document. getElementById("usuario").value;
    var password=document. getElementById("clave").value;
    var uname=employee.usuario_usuarios;
    var pasw=employee.clave_usuarios;
    //alert( pasw );
    //alert(password);
    if(username==uname && password == pasw  ){
    	window.location.href = "bienvenida.html";
     break;
    }
    else{
        var status=1;
     }
   }
   
   if(status==1)
    {
	   
       //alert("login failed");
       //alertDGC("login failed");
       alert("Error al iniciar Sesion");
       //jAlert('This is a custom alert box', 'Alert Dialog');
    }
}
