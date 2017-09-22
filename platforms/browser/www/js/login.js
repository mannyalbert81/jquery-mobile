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
	 $(document).on('click', '#btn-ingresar', function(){
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
    var uname=employee.usuario_usuario;
    
    if(username==uname  ){
    	window.location.href = "bienvenida.html";
     break;
    }
    else{
        var status=1;
     }
   }
   
   if(status==1)
    {
	  alert("Error al iniciar Sesion");
     }
}



















