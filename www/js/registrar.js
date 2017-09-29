
var base_url = 'http://186.4.203.42:4000/Vademano/webservices/';
var pag_service = 'SincronizacionService.php?jsoncallback=?' ;

var db = window.openDatabase("vade.db", "1.0", "MY DB", 200000); //crea o abre la base

$(document).on("ready",ini);

function ini()
{
	$('#btn-scanner').click(scan);
	//$('#btn-scanner').click(registrar(19));
}

function registrar(id)
{
	var queryIns = 'INSERT INTO usuarios( nombre_estado, nombres_usuario , apellidos_usuario , usuario_usuario , celular_usuario , telefono_usuario ) VALUES (?,?,?,?,?)';
	 
	$.getJSON( base_url+pag_service, { id_usuario:id})
	.done(function(x) {
		console.log(x);
		db.transaction(function (tx) {
			 tx.executeSql("DELETE FROM usuarios;");
			});
		
		$.each(x, function(i, j) {			
			   db.transaction(function (tx) {				  
				   tx.executeSql(queryIns,
						   [j.estado,j.nombres,j.apellidos,j.usuario,j.celular,j.telefono],
						   function (tx, res) {/*alert('usuario registrado'); window.location.href = "index.html";*/},
						   function (e) {alert("ERROR: " + e.message);});
				 
			   });
			  });
	});
}

function scan()
{
    cordova.plugins.barcodeScanner.scan(
        function (result) {
            if(!result.cancelled)
            {
                if(result.format == "QR_CODE")
                {
                	var value = result.text;
                	if(value!="")
                		{
                			registrar(value);
                			window.location.href = "index.html";
                		}
                }
            }
        },
        function (error) {
            alert("Scanning failed: " + error);
        }
   );
}


function openURL(url)
{
    window.open(url, '_blank', 'location=yes');
}
