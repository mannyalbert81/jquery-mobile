/*$(document).on("ready",ini);

function ini()
{
	
//	alert('MI error');
}




//<!--Calling onDeviceReady method-->
document.addEventListener("deviceready", onDeviceReady, false);
var db = window.openDatabase("vade.db", "1.0", "MY DB", 200000); //will create database Dummy_DB or open it


function onDeviceReady() {

	db.transaction(populateDB, errorCB, successCB);



	
}




//create table and insert some record
function populateDB(tx) {
	
	var _name="Leonel Mesi";
	var _club="Real Madrid";
	
	
    tx.executeSql('CREATE TABLE IF NOT EXISTS SoccerPlayer (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, club TEXT NOT NULL)');
    
    var executeQuery = "INSERT INTO SoccerPlayer(name,club) VALUES (?,?)";
    
    tx.executeSql(executeQuery, [_name,_club],
    	function(tx, result) {
    		alert('Inserted');
    	},
    	function(error){
    		alert('Error occurred');
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


function show(){
	db.transaction(function(transaction) {
	transaction.executeSql('SELECT * FROM SoccerPlayer', [], function (tx, results) {
	var name = "";
	var club = "";

	//<!--Display the table head-->
	var pair="<tr><th data-priority=\"1\"><center>Name</center></th><th data-priority=\"2\"><center>Club</center></th><</tr>";
	var i=0;

	//<!--results.rows.length to get the total number of rows stored in the database-->
	var len = results.rows.length, i;
	for (i=0; i<=len-1; i++) {

		//<!--Fetching the 'name' from the database-->
	name = results.rows.item(i).name;
	club = results.rows.item(i).club;
	//<!--Fetching the 'id' from the database-->
	id = results.rows.item(i).id;

	//<!--Displaying all rows of the database in the table-->
	pair += "<tr><td><center>"+name+"</center></td><td><center>"+club+"</center></td></tr>";
	}
	if (pair == "<tr><th>Name</th><th>Club</th></tr>") {
	pair += "<tr><td><i>empty</i></td><td><i>empty</i></td></tr>";
	}
	$("#myTable").html(pair);
	}, null);
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