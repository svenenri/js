/*
0 -> James
1 -> Jill
2 -> Jane
3 -> Jack
Bonus (Only If You Have Time):

Let the user pass in the symbol that will print (ex: "->", "=>", "::", "-----")
Have an extra parameter reversed. If the user passes true, print the elements in reverse order*/

var arr = ["James", "Jill", "Jane", "Jack"];

var symbol = "-->";

var reversed = true;

function fancy(arr, symbol, reversed){
	for(var i = 0; i < arr.length; i ++){
		if(reversed == true){
			console.log(((arr.length - 1) - i) + " " + symbol + " " + (arr[(arr.length - 1) - i]));
		}
		else{
			console.log(i + " " + symbol + " " + arr[i] +"\r");
		}
	}

}

fancy(arr, symbol, reversed);
