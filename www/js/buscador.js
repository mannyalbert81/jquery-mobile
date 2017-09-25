$(document).on("ready",ini);

function ini()
{
	
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
    	//db.transaction(count_fichas, transaction_error);
    	
    	$("#tabla_prod").html("");
    	$("#tabla_ali").html("");
    });
    
  }
 $("#countprod").html(0);
 $("#countali").html(0);
}


function transaction_error(tx, error) {
 alert("Database Error: " + error);
}

/*
function count_fichas(){
	
	var contenido_busqueda=document. getElementById("contenido_busqueda").value;
	db.transaction(function(transaction) {
	transaction.executeSql('SELECT * FROM fichas_service WHERE 1=1 AND tipo_ficha="P" AND buscador like ?', ["%"+contenido_busqueda+"%"], function (tx, results) {
	var len = results.rows.length, i;
	$("#countprod").html(len);
    	
    var id2 = "";
	var nombre = "";
    var pair="";
  
	var i=0;
	var len1 = results.rows.length, i;
	var imgficha ='';
	
	for (i=0; i<=len1-1; i++) {
		clasificacion_farmacologica_fichas = results.rows.item(i).clasificacion_farmacologica_fichas;
		nombre = results.rows.item(i).nombre_fichas;
		id2 = results.rows.item(i).id_fichas;

		db.transaction(function(transaction) {
			transaction.executeSql('SELECT foto FROM ficha_foto  WHERE 1=1 AND id_fichas = ?', [id2], function (tx1, res) {
				var len_foto1 = res.rows.length, i;
				var foto="";

				
				

				if(len_foto1 > 0){
					
					for (var i=0; i<= len_foto1-1; i++) {  
						 foto = res.rows.item(i).foto;
					}
					
					    imgficha = 'data:image/png;base64,'+foto;
					 
					 
					    pair += "<div class='col-lg-3 col-md-3 col-xs-6'>";
						pair += "<div class='contenedor-img ejemplo-1'>";
						pair += "<img  src='"+imgficha+"' width='200' height='150'>";
						pair += "<div class='mascara'>";
						pair += "<h2>"+nombre+"</h2>";
						pair += "<p>"+clasificacion_farmacologica_fichas+"</p>";
						pair += "<a class='link' href='FichaOnline.html?id_fichas="+id2+"'>Leer mas</a>";
						pair += "</div>";
						pair += "</div>";
						pair += "</div>";
				}else{
					imgficha='img/nodisponible.jpg';
					
					    pair += "<div class='col-lg-3 col-md-3 col-xs-6'>";
						pair += "<div class='contenedor-img ejemplo-1'>";
						pair += "<img  src='"+imgficha+"' width='200' height='150'>";
						pair += "<div class='mascara'>";
						pair += "<h2>"+nombre+"</h2>";
						pair += "<p>"+clasificacion_farmacologica_fichas+"</p>";
						pair += "<a class='link' href='FichaOnline.html?id_fichas="+id2+"'>Leer mas</a>";
						pair += "</div>";
						pair += "</div>";
						pair += "</div>";
					
				}
				
			},null);
			
		});
		
	}
	
	$(document).on('click', '#btn_pro', function(){
	$("#tabla_prod").html(pair);
	$("#tabla_ali").html("");
	 });
    
	}, null);
	});
		
	db.transaction(function(transaction) {
		transaction.executeSql('SELECT * FROM fichas_service WHERE 1=1 AND tipo_ficha="A" AND buscador like ?', ["%"+contenido_busqueda+"%"], function (tx, results) {
		var len2 = results.rows.length, i;
		$("#countali").html(len2);
		var id1 = "";
		var nombre = "";
		var pair1="";
		var i=0;
		var len3 = results.rows.length, i;
		var imgficha ='',fotoImg;
		
		
		for (i=0; i<=len3-1; i++) {
			
			clasificacion_farmacologica_fichas = results.rows.item(i).clasificacion_farmacologica_fichas;
			nombre = results.rows.item(i).nombre_fichas;
			id1 = results.rows.item(i).id_fichas;
			

			fotoImg=ponerImagen(id1,function(res){
				if(res.rows.length>0)
					{

			db.transaction(function(transaction) {
				transaction.executeSql('SELECT foto FROM ficha_foto  WHERE 1=1 AND id_fichas = ?', [id1], function (tx1, res) {
					var len_foto = res.rows.length, i;
					var foto="";
					
					if(len_foto > 0){

						var fotostr = res.rows.item(0).foto;
						console.log(fotostr);
						$('#fotoimagen').data('id','228');
						$('#fotoimagen').data('foto',4564);

						for (var i=0; i<= len_foto-1; i++) {  
							 foto = res.rows.item(i).foto;
						}
						
						 imgficha = 'data:image/png;base64,'+foto;
						
						 
						    pair1 += "<div class='col-lg-3 col-md-3 col-xs-6'>";
							pair1 += "<div class='contenedor-img ejemplo-1'>";
							pair1 += "<img  src='"+imgficha+"' width='200' height='150'>";
							pair1 += "<div class='mascara'>";
							pair1 += "<h2>"+nombre+"</h2>";
							pair1 += "<p>"+clasificacion_farmacologica_fichas+"</p>";
							pair1 += "<a class='link' href='FichaOnlineAli.html?id_fichas="+id1+"'>Leer mas</a>";
							pair1 += "</div>";
							pair1 += "</div>";
							pair1 += "</div>";
						 
					}else{
						imgficha='img/nodisponible.jpg';
						    pair1 += "<div class='col-lg-3 col-md-3 col-xs-6'>";
							pair1 += "<div class='contenedor-img ejemplo-1'>";
							pair1 += "<img  src='"+imgficha+"' width='200' height='150'>";
							pair1 += "<div class='mascara'>";
							pair1 += "<h2>"+nombre+"</h2>";
							pair1 += "<p>"+clasificacion_farmacologica_fichas+"</p>";
							pair1 += "<a class='link' href='FichaOnlineAli.html?id_fichas="+id1+"'>Leer mas</a>";
							pair1 += "</div>";
							pair1 += "</div>";
							pair1 += "</div>";
						

					}
			});
					
			 imgficha = 'data:image/png;base64,'+$('#fotoimagen').data('foto');
			 
			    pair1 += "<div class='col-lg-3 col-md-3 col-xs-6'>";
				pair1 += "<div class='contenedor-img ejemplo-1'>";
				pair1 += "<img  src='"+imgficha+"' width='200' height='150'>";
				pair1 += "<div class='mascara'>";
				pair1 += "<h2>"+nombre+"</h2>";
				pair1 += "<p>"+clasificacion_farmacologica_fichas+"</p>";
				pair1 += "<a class='link' href='FichaOnlineAli.html?id_fichas="+id1+"'>Leer mas</a>";
				pair1 += "</div>";
				pair1 += "</div>";
				pair1 += "</div>";
		}
		
		
		 $(document).on('click', '#btn_ali', function(){
		$("#tabla_ali").html(pair1);
		$("#tabla_prod").html("");
		 });
		 
		}, null);
		});
	}
*/

function ponerImagen(idimg,callback)
{ console.log(idimg);
	var fotostr = '';
	db.transaction(function(tx) {
		tx.executeSql('SELECT foto FROM ficha_foto  WHERE 1=1 AND id_fichas = ?', [idimg], 
		function (tx, res) {
			callback(res);
		}
		);
	});			
}


