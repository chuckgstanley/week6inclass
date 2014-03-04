/**
 * @author
 */
//make sure html is pulling jscripts
//console.log("javascript working");

//create dataLoaded function with unemployment
//data under local name "Unemployment"
//sub-catagorized into an array of relevant information
function jsonLoaded(unemployment) {
	//Log Unemployment numbers to demonstrate jsonloaded is working
	console.log(unemployment);
var gDataTable = new google.visualization.DataTable();

	//when I add columns, the first parameter is the 
	//the second parameter is the name of the column
	gDataTable.addColumn("string", unemployment.columns[0]);
	gDataTable.addColumn("number", unemployment.columns[1]);
	
	
	gDataTable.addRows (unemploymwnt.rows);
		
	//create options object to customize look of the chart
	var shartOptions = {
			title: "Unemployment since 1948"
	};
	
	

	// Log data from "displayData" to show function is working
	//console.log(displayData);

	//Create a data table from "displayData"
	//var unmpDataTable = google.visualization.arrayToDataTable(displayData);


	// Draw the linegraph in html div "graph div"

	var unmpGraph = new google.visualization.LineChart(document.getElementById("UnmpGraphDiv"));
	unmpGraph.draw(gDataTable)

	
	
}//end of jsonLoaded function

//build googleLoaded function
//with Unemployment file imported

function chartLoaded() {
	//Console log to show that googleLoaded is working
	console.log("Google Loaded");

	//Import Unemployment json file
	$.get("https://www.googleapis.com/fusiontables/v1/query?sql=SELECT+*+FROM+1f5wTbwjh7pbobwOgv48U_MCXPW9f-Gu-BiZfXsRb&key=AIzaSyALhD6XEx_Ge1QTHvfmlwy5e_9_p--vouY", jsonLoaded, "json");
}//end chartLoaded function

function pageLoaded() {

	//indicate page has loaded
	console.log("Page Loaded!");

	//Load chart from google and init. google loaded function
	google.load("visualization", "1", {
		packages : ["corechart"],
		callback : "chartLoaded"
	
	
	});

}// end pageLoaded function

//load chart

		
// pageLoaded function
$(document).ready(pageLoaded);
