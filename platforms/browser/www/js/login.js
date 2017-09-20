////local



$(document).on("ready",ini);

function ini()
{
	
	alert('Logueando');
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
     alert("Login Success");
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
       alert("Hola", "Error al iniciar Sesion");
       //jAlert('This is a custom alert box', 'Alert Dialog');
    }
}



















