$(document).on("ready",ini);

function ini()
{
	
}

document.addEventListener("deviceready", onDeviceReady, false);
var db = window.openDatabase("vade.db", "1.0", "MY DB", 200000); 

function onDeviceReady() 
{
	
	fileTransfer.onprogress = function(progressEvent){
        var total = progressEvent.total;
        var avanc = progressEvent.loaded;

        var perce = Math.round( (avanc / total) * 100);
        $("#cargando").html("Cargando Información: "+perce+"%");
       
        db.transaction(init_pag, errorCB, successCB);
    }
   
   
	
}

function init_pag(tx)
{	
	checkConnection();
}

var online;


function checkConnection() {
        var networkState = navigator.network.connection.type;
        var states = {};
    states[Connection.UNKNOWN]  = '1';  //Conexión desconocida;
    states[Connection.ETHERNET] = '1';  //Conexión ethernet;
    states[Connection.WIFI]     = '1';  //Conexión WiFi';
    states[Connection.CELL_2G]  = '1';  //Conexión movil 2G';
    states[Connection.CELL_3G]  = '1';  //Conexión movil 3G';
    states[Connection.CELL_4G]  = '1';  //Conexión movil 4G';
    states[Connection.NONE]     = '0';  //Sin conexión';
      
    online=states[networkState];
   
     if (online=='1'){
    	
    	 verificarusuario_internet();
    	 
    	
    	 
     }else{
    	 
    	 verificarusuario();
    	
     }
     
    }





function verificarusuario_internet(){
	
	db.transaction(function(transaction) {
		transaction.executeSql('SELECT * FROM usuarios WHERE 1=1', [], function (tx, results) {
		var len_usuarios = results.rows.length, i;
		var id_usuario=0;
		
		for (i=0; i<=len_usuarios-1; i++) {
			id_usuario = results.rows.item(i).id_usuario;
		}
		
		if(id_usuario > 0){
			 archivoValidacion = "http://186.4.203.42:4000/Vademano/webservices/SincronizacionUsuarioInactivoService.php?jsoncallback=?"
				   var queryIns = 'INSERT INTO usuarios(id_usuario, nombres_usuario, apellidos_usuario , usuario_usuario , celular_usuario , telefono_usuario, nombre_estado ) VALUES (?,?,?,?,?,?,?)';
					 
					$.getJSON( archivoValidacion, { id_usuario:id_usuario})
					.done(function(x) {
						console.log(x);
						db.transaction(function (tx) {
							 tx.executeSql("DELETE FROM usuarios;");
							});
						
							$.each(x, function(i, j) {			
								   db.transaction(function (tx) {				  
								   tx.executeSql(queryIns,
										   [j.id_usuario,j.nombres_usuario,j.apellidos_usuario,j.usuario_usuario,j.celular_usuario,j.telefono_usuario,j.nombre_estado],
									 function (tx, res) {
										   
									   db.transaction(function(transaction) {
											transaction.executeSql('SELECT * FROM usuarios WHERE 1=1', [], function (tx, results) {
											var len_usuarios1 = results.rows.length, i;
											var id_usuario1=0;
											var estado='';
											
											for (i=0; i<=len_usuarios1 - 1; i++) {
												id_usuario1 = results.rows.item(i).id_usuario;
												estado = results.rows.item(i).nombre_estado;
											}
											
											if(id_usuario1>0){
												
												if(estado=='ACTIVO'){
													
													window.location.href = "Bienvenida.html";
													
												}else{
													
													window.location.href = "UsuarioInactivo.html";
												}
												
											}else{
												
												window.location.href = "index1.html";
											}
											
											}, null);
											
										});
											
									  },
											   function (e) {alert("ERROR: " + e.message);});
								   });
						  });
					});
			
		}
		
		
		}, null);
		
	});
	
}



function errorCB(err) {
    console.log('error encontrado');
}
function successCB (){
}






function verificarusuario(){
	
	db.transaction(function(transaction) {
		transaction.executeSql('SELECT * FROM usuarios WHERE 1=1', [], function (tx, results) {
		var len_usuarios = results.rows.length, i;
		var id_usuario=0;
		
		for (i=0; i<=len_usuarios-1; i++) {
			id_usuario = results.rows.item(i).id_usuario;
		}
		
		if(id_usuario > 0){
			
			window.location.href = "Bienvenida.html";
										
		}else{
			
			window.location.href = "index1.html";
		}
		
		
		}, null);
		
	});
	
}



