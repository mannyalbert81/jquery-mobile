$(document).on("ready",ini);

function ini()
{
	
}


var db;


document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady(){
 db = window.openDatabase("vade.db", "1.0", "MY DB", 200000); //will create database Dummy_DB or open it
 
 	db.transaction(cargar_fichas, transaction_error);
 	
 
}


function transaction_error(tx, error) {
 alert("Database Error: " + error);
}




function cargar_fichas(){

	var param = document.location.href; 
	function $_GET(param)
	{
	url = document.URL;
	url = String(url.match(/\?+.+/));
	url = url.split("?");

	x = 0;
	while (x < url.length)
	{
	p = url[x].split("=");
	if (p[0] == param)
	{
	return decodeURIComponent(p[1]);
	}
	x++;
	}
	}


	var id_fichas1 = $_GET("id_fichas");
    

	db.transaction(function(transaction) {
		transaction.executeSql('SELECT logo_especies FROM foto_especies  WHERE 1=1 AND id_fichas = ?', [id_fichas1], function (tx, results) {
			var len_foto1 = results.rows.length, i;
			var foto1="";
			var imgficha1="";
			var pair="";
			var pair1="";
			
			if(len_foto1 > 0){
				
				for (var i=0; i<= len_foto1-1; i++) {
						 foto1 = results.rows.item(i).logo_especies;	
					
						 imgficha1 = 'data:image/png;base64,'+foto1;
						 pair += "<img  src='"+imgficha1+"' width='50' height='50'>";
						 
				}
				
				 $("#foto_especies").html(pair);
				 
				 
			}else{
				
				imgficha11='img/nodisponible.jpg';
				 pair1 += "<img  src='"+imgficha11+"' width='50' height='50'>";
				 
				 $("#foto_especies").html(pair1);
				
			}
			
		}, null);
	});
				
    
	db.transaction(function(transaction) {
	transaction.executeSql('SELECT * FROM fichas_service WHERE id_fichas=?', [id_fichas1], function (tx, results) {
	
	var id_fichas = "";
	var nombre_fichas = "";
    var encabezado_tabla_fichas="";
    var farmacocinetica_fichas="";
    var accion_terapeutica_fichas="";
    var clasificacion_farmacologica_fichas="";
    var forma_terapeutica_fichas="";
    var indicaciones_uso_fichas="";
    var interacciones_fichas="";
    var contraindicaciones_fichas="";
    var periodo_retiro_fichas="";
    var advertencias_fichas="";
    var presentacion_fichas="";
    var registro_sanitario_fichas="";
    var mecanismo_accion_fichas="";
    var efectos_colaterales_fichas="";
    var conservacion_fichas="";
    var ingredientes_fichas="";
    var tipo_alimento_fichas="";
    var encabezado_dosificacion_fichas="";
    var tipo_ficha="";
    
    
    var tabla_formas_administracion="";
    var tabla_laboratorios="";
    var tabla_distribuidores="";
    var tabla_composicion="";
    var tabla_dosificacion="";
    var foto_fichas="";
    var imgficha="";
  
	var i=0;
	var len1 = results.rows.length, i;
	for (i=0; i<=len1-1; i++) {
			
		id_fichas 						= results.rows.item(i).id_fichas;
		nombre_fichas 					= results.rows.item(i).nombre_fichas;
	    encabezado_tabla_fichas			=results.rows.item(i).encabezado_tabla_fichas;
	    farmacocinetica_fichas			=results.rows.item(i).farmacocinetica_fichas;
	    accion_terapeutica_fichas		=results.rows.item(i).accion_terapeutica_fichas;
	    clasificacion_farmacologica_fichas	=results.rows.item(i).clasificacion_farmacologica_fichas;
	    forma_terapeutica_fichas		=results.rows.item(i).forma_terapeutica_fichas;
	    indicaciones_uso_fichas			=results.rows.item(i).indicaciones_uso_fichas;
	    interacciones_fichas			=results.rows.item(i).interacciones_fichas;
	    contraindicaciones_fichas		=results.rows.item(i).contraindicaciones_fichas;
	    periodo_retiro_fichas			=results.rows.item(i).periodo_retiro_fichas;
	    advertencias_fichas				=results.rows.item(i).advertencias_fichas;
	    presentacion_fichas				=results.rows.item(i).presentacion_fichas;
	    registro_sanitario_fichas		=results.rows.item(i).registro_sanitario_fichas;
	    mecanismo_accion_fichas			=results.rows.item(i).mecanismo_accion_fichas;
	    efectos_colaterales_fichas		=results.rows.item(i).efectos_colaterales_fichas;
	    conservacion_fichas				=results.rows.item(i).conservacion_fichas;
	    ingredientes_fichas				=results.rows.item(i).ingredientes_fichas;
	    tipo_alimento_fichas			=results.rows.item(i).tipo_alimento_fichas;
	    encabezado_dosificacion_fichas	=results.rows.item(i).encabezado_dosificacion_fichas;
	    tipo_ficha						=results.rows.item(i).tipo_ficha;
	    tabla_formas_administracion		=results.rows.item(i).tabla_formas_administracion;
	    tabla_laboratorios				=results.rows.item(i).tabla_laboratorios;
	    tabla_distribuidores			=results.rows.item(i).tabla_distribuidores;
	    tabla_composicion				=results.rows.item(i).tabla_composicion;
	    tabla_dosificacion				=results.rows.item(i).tabla_dosificacion;
	    foto_fichas				        =results.rows.item(i).foto_fichas_fotos;
		
	    
	    if(foto_fichas != ""){
			 imgficha = 'data:image/png;base64,'+foto_fichas;
			 $("#foto").attr({'src':imgficha});
		}else{
			imgficha='img/nodisponible.jpg';
			$("#foto").attr({'src':imgficha});
		}
	    
	   }
	
	
	    if (id_fichas!=""){
	    	
		    $("#id_fichas").html(id_fichas);
		}
		
		if (nombre_fichas!=""){
		
	    	
		$("#nombre_fichas").html(nombre_fichas);
		}
		
		if (encabezado_tabla_fichas!=""){
		$("#encabezado_tabla_fichas").html(encabezado_tabla_fichas);
		}
		
		if (farmacocinetica_fichas!=""){
		$("#farmacocinetica_fichas").html(farmacocinetica_fichas);
		}
		
		if (accion_terapeutica_fichas!=""){
		$("#accion_terapeutica_fichas").html(accion_terapeutica_fichas);
		}
		
		if (clasificacion_farmacologica_fichas!=""){
			
		$("#clasificacion_farmacologica_fichas").html(clasificacion_farmacologica_fichas);
		}
		
		if (forma_terapeutica_fichas!=""){
		$("#forma_terapeutica_fichas").html(forma_terapeutica_fichas);
		}
		
		if (indicaciones_uso_fichas!=""){
		$("#indicaciones_uso_fichas").html(indicaciones_uso_fichas);
		}
		
		if (interacciones_fichas!=""){
		$("#interacciones_fichas").html(interacciones_fichas);
		}
		
		if (contraindicaciones_fichas!=""){
		$("#contraindicaciones_fichas").html(contraindicaciones_fichas);
		}
		
		if (periodo_retiro_fichas!=""){
		$("#periodo_retiro_fichas").html(periodo_retiro_fichas);
		}
		
		if (advertencias_fichas!=""){
		$("#advertencias_fichas").html(advertencias_fichas);
		}
		
		if (presentacion_fichas!=""){
		$("#presentacion_fichas").html(presentacion_fichas);
		}
		
		if (registro_sanitario_fichas!=""){
		$("#registro_sanitario_fichas").html(registro_sanitario_fichas);
		}
		
		if (mecanismo_accion_fichas!=""){
		$("#mecanismo_accion_fichas").html(mecanismo_accion_fichas);
		}
		
		if (efectos_colaterales_fichas!=""){
		$("#efectos_colaterales_fichas").html(efectos_colaterales_fichas);
		}
		
		if (conservacion_fichas!=""){
		$("#conservacion_fichas").html(conservacion_fichas);
		}
		
		if (ingredientes_fichas!=""){
		$("#ingredientes_fichas").html(ingredientes_fichas);
		}
		
		if (tipo_alimento_fichas!=""){
		$("#tipo_alimento_fichas").html(tipo_alimento_fichas);
		}
		
		if (encabezado_dosificacion_fichas!=""){
		$("#encabezado_dosificacion_fichas").html(encabezado_dosificacion_fichas);
		}
		
		if (tipo_ficha!=""){
		$("#tipo_ficha").html(tipo_ficha);
		}
		
		
<<<<<<< HEAD
		if (tabla_formas_administracion!=""){
		$("#tabla_formas_administracion").html(tabla_formas_administracion);
		}
		
		if (tabla_laboratorios!=""){
		$("#tabla_laboratorios").html(tabla_laboratorios);
		}
		
		if (tabla_distribuidores!=""){
		$("#tabla_distribuidores").html(tabla_distribuidores);
		}
		
		if (tabla_composicion!=""){
		$("#tabla_composicion").html(tabla_composicion);
		}
		
		
		if (tabla_dosificacion!=""){
		$("#tabla_dosificacion").html(tabla_dosificacion);
		}
		 
	    
	
=======
	}
	if (id_fichas!=""){
	$("#id_fichas").html(id_fichas);
	}
	
	if (nombre_fichas!=""){
	$("#nombre_fichas").html(nombre_fichas);
	}
	
	if (encabezado_tabla_fichas!=""){
	$("#encabezado_tabla_fichas").html(encabezado_tabla_fichas);
	}
	
	if (farmacocinetica_fichas!=""){
	$("#farmacocinetica_fichas").html(farmacocinetica_fichas);
	}
	
	if (accion_terapeutica_fichas!=""){
	$("#accion_terapeutica_fichas").html(accion_terapeutica_fichas);
	}
	
	if (clasificacion_farmacologica_fichas!=""){
	$("#clasificacion_farmacologica_fichas").html(clasificacion_farmacologica_fichas);
	}
	
	if (forma_terapeutica_fichas!=""){
	$("#forma_terapeutica_fichas").html(forma_terapeutica_fichas);
	}
	
	if (indicaciones_uso_fichas!=""){
	$("#indicaciones_uso_fichas").html(indicaciones_uso_fichas);
	}
	
	if (interacciones_fichas!=""){
	$("#interacciones_fichas").html(interacciones_fichas);
	}
	
	if (contraindicaciones_fichas!=""){
	$("#contraindicaciones_fichas").html(contraindicaciones_fichas);
	}
	
	if (periodo_retiro_fichas!=""){
	$("#periodo_retiro_fichas").html(periodo_retiro_fichas);
	}
	
	if (advertencias_fichas!=""){
	$("#advertencias_fichas").html(advertencias_fichas);
	}
	
	if (presentacion_fichas!=""){
	$("#presentacion_fichas").html(presentacion_fichas);
	}
	
	if (registro_sanitario_fichas!=""){
	$("#registro_sanitario_fichas").html(registro_sanitario_fichas);
	}
	
	if (mecanismo_accion_fichas!=""){
	$("#mecanismo_accion_fichas").html(mecanismo_accion_fichas);
	}
	
	if (efectos_colaterales_fichas!=""){
	$("#efectos_colaterales_fichas").html(efectos_colaterales_fichas);
	}
	
	if (conservacion_fichas!=""){
	$("#conservacion_fichas").html(conservacion_fichas);
	}
	
	if (ingredientes_fichas!=""){
	$("#ingredientes_fichas").html(ingredientes_fichas);
	}
	
	if (tipo_alimento_fichas!=""){
	$("#tipo_alimento_fichas").html(tipo_alimento_fichas);
	}
	
	if (encabezado_dosificacion_fichas!=""){
	$("#encabezado_dosificacion_fichas").html(encabezado_dosificacion_fichas);
	}
	
	if (tipo_ficha!=""){
	$("#tipo_ficha").html(tipo_ficha);
	}
	
	
	if (tabla_formas_administracion!=""){
	$("#tabla_formas_administracion").html(tabla_formas_administracion);
	}
	
	if (tabla_laboratorios!=""){
	$("#tabla_laboratorios").html(tabla_laboratorios);
	}
	
	if (tabla_distribuidores!=""){
	$("#tabla_distribuidores").html(tabla_distribuidores);
	}
	
	if (tabla_composicion!=""){
	$("#tabla_composicion").html(tabla_composicion);
	}
	
	
	if (tabla_dosificacion!=""){
	$("#tabla_dosificacion").html(tabla_dosificacion);
	}
	 
>>>>>>> branch 'master' of https://github.com/mannyalbert81/jquery-mobile.git
    
	}, null);
	});
		

	}
