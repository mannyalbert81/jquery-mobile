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
	transaction.executeSql('SELECT * FROM fichas_service', [], function (tx, results) {
	
	var id_fichas = "";
	var nombre_fichas = "";

	//<!--results.rows.length to get the total number of rows stored in the database-->
	var len = results.rows.length, i;
	alert(len);
	$("#count_productos").html(len);
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















