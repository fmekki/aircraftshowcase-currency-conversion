	console.clear();

	$(document).ready(function(){
    $("#to_usd").click(function(e){
            if($("#currency_amount").val() == "" || $("#currency_amount").val() == "0"){
                alert("Invalid Amount");
                return false;
            }else{
                converttoUSD();
            }e.preventDefault();
    });
    $("#to_gbp").click(function(e){
            if($("#currency_amount").val() == "" || $("#currency_amount").val() == "0"){
                alert("Invalid Amount");
                return false;
            }else{
            		// console.log("Converting....");
                converttoGBP();

            }e.preventDefault();
    });
    $("#to_yen").click(function(e){
            if($("#currency_amount").val() == "" || $("#currency_amount").val() == "0"){
                alert("Invalid Amount");
                return false;
            }else{
                converttoYEN();
            }e.preventDefault();
    });
    $("#to_eur").click(function(e){
            if($("#currency_amount").val() == "" || $("#currency_amount").val() == "0"){
                alert("Invalid Amount");
                return false;
            }else{
                converttoEUR();
            }e.preventDefault();
    });
});    

function converttoUSD(){
  var from = $("#curr_currency").text();
  $("#curr_currency").text("USD");
  var to = $("#to_usd").text();
  console.log("Converstion from " + from + " to " + to);
  document.getElementById("loading").style.opacity = "1";
  $(".curr_symbol").html("$");
  getRate(from, to);
}
function converttoGBP(){
  var from = $("#curr_currency").text();
  $("#curr_currency").text("GBP");
  var to = $("#to_gbp").text();
  console.log("Converstion from " + from + " to " + to);
  document.getElementById("loading").style.opacity = "1";
  $(".curr_symbol").html("£");
  getRate(from, to);
}
function converttoYEN(){
  var from = $("#curr_currency").text();
  $("#curr_currency").text("JPY");
  var to = $("#to_yen").text();
  console.log("Converstion from " + from + " to " + to);
  document.getElementById("loading").style.opacity = "1";
  $(".curr_symbol").html("¥");
  getRate(from, to);
}
function converttoEUR(){
  var from = $("#curr_currency").text();
  $("#curr_currency").text("EUR");
  var to = $("#to_eur").text();
  console.log("Converstion from " + from + " to " + to);
  document.getElementById("loading").style.opacity = "1";
  $(".curr_symbol").html("€");
  getRate(from, to);
}

function getRate(from, to) { 
  var script = document.createElement('script');
  script.setAttribute('src', "http://query.yahooapis.com/v1/public/yql?q=select%20rate%2Cname%20from%20csv%20where%20url%3D'http%3A%2F%2Fdownload.finance.yahoo.com%2Fd%2Fquotes%3Fs%3D"+from+to+"%253DX%26f%3Dl1n'%20and%20columns%3D'rate%2Cname'&format=json&callback=ExchangeRate");
  document.body.appendChild(script);  
}

function ExchangeRate(data) {


  var amount2 = document.getElementsByClassName("curr_conv");                      
  var rate = parseFloat(data.query.results.row.rate, 10); 
  console.log(rate);
  for(var i = 0; i < amount2.length; i++) {
			// Grab data
			var levalue = amount2[i].innerHTML;
			var levalue = levalue.toString().replace(/,/g, "");
			// Convert and format to 2 decimal points
			var convert = levalue*rate;
			var convert = convert.toFixed(0); 
			var convert = convert.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
			// // Replace them
			amount2[i].innerHTML = convert;
  } 
  document.getElementById("loading").style.opacity = "0";
  console.log("Finished!");
}



