////local



$(document).on("ready",ini);

function ini()
{
	
//	alert('MI error');
}




//<!--Calling onDeviceReady method-->
document.addEventListener("deviceready", onDeviceReady, false);
var db = window.openDatabase("vade.db", "1.0", "MY DB", 200000); //will create database Dummy_DB or open it


function onDeviceReady() {

	//db.transaction(populateDB, errorCB, successCB);


	
	$(document).on('click', '#btn-ingresar', function(){
		
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





$(document).ready(function(){  
   
	$('#ok').click(function(){  
        var uname = document.getElementById("usuario").value;
        var password = document.getElementById("clave").value;
        var JSONObject= {
             "uname":uname,
             "password":password
             };

        $.ajax({  
            url:'http://localhost:8090/LoginAuthRWS/rest/orders',  
            type:'post',
            data :  JSONObject,      
            dataType: 'JSON',
            success: function(data) { 
                     var jsonData = $.parseJSON(data); //if data is not json
                     $('#name').val(jsonData.name);  
                     $('#email').val(jsonData.email);  
                }  
        });  
    });  
}); 