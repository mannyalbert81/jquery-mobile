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

 if (dbCreated)
  {
	 alert("No creada");
  }
 
 else{
	
    $(document).on('click', '#btn_buscar', function(){
    	db.transaction(show_fichas, transaction_error);
    });
    
 }
 
}
/*
function getregistdata(tx){
 
 
  var sql = "SELECT * FROM fichas_service";
  tx.executeSql(sql, [], getfichas_success);
}*/

function transaction_error(tx, error) {
 alert("Database Error: " + error);
}


function show_fichas(){
	db.transaction(function(transaction) {
	transaction.executeSql('SELECT * FROM fichas_service ', [], function (tx, results) {
	var id_fichas = "";
	var nombre_fichas = "";

	//<!--Display the table head-->
	var pair="<tr><th data-priority=\"1\"><center>Id</center></th><th data-priority=\"2\"><center>Nombre</center></th><</tr>";
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
	$("#tabla_fichas").html(pair);
	}, null);
	});
}
/*
  function getfichas_success(tx, results){
   var len = results.rows.length;
   for (var i=0; i< len; i++) {  
    var employee = results.rows.item(i);
    var contenido_busqueda=document. getElementById("contenido_busqueda").value;
    var buscador=employee.nombre_fichas;
  
	
    
    if(contenido_busqueda==buscador){
    	alert("Existe datos");
     break;
    }
    else{
        var status=1;
     }
   }
   
   if(status==1)
    {
	   
       
       alert("No hay Datos");
       
    }
}



*/















