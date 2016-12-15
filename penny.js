function compound(){

var penny = 0.01;

var count = 1;

var sentence = "It would take the servant " + i + " days to make $10000.00."

for(var i = 1; i <= 30; i++){
	penny = penny * 2;

	if(count > 1){
		continue;
	}
	if(penny >= 10000){
		console.log("It would take the servant " + i + " days to make $10000.00")
		count += 1;
	}
	
}

console.log("After 30 days the reward was $" + penny + "!");

}



function billion(){
var penny = 0.01;

var count = 1;

while(penny < 1000000000){
	penny = penny * 2;
	count += 1;
}

console.log("It would take the servant " + count + " days to make $1000000000.00");

}

compound();

billion();
