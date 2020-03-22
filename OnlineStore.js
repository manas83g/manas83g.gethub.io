var itemsC=[];
var istotalhiden=true;

var Backpack={
	name : Backpack,
	price : 400
}
var Camera={
	name : Camera, 
	price:500,
}
function addToCart(item) {
	itemsC.push(item);
	document.getElementById('itemsCount').innerHTML=itemsC.length;
	totalcart();
}

function clickcart(){
	istotalhiden=!istotalhiden;
	totalcart();
}

function totalcart(){
var total =document.getElementById("totalcart");
total.innerHTML="";
if (istotalhiden===false) {
	var vtotal =0;
	for (var i = 0; i < itemsC.length; i++) {
		vtotal += itemsC[i].price;
	}
	total.innerHTML +="Your total is $"+vtotal;
}
}

