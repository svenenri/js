/*Make a function that copies an array, ONLY accepting the items that are numbers.*/

function numsOnly(arr){
	var newArray = [];
	for(var i = 0; i < arr.length; i++){
		if(typeof arr[i] == "number"){
			newArray.push(arr[i]);
		}
	}
	return newArray;
}

var newArr = ["Steve" , 12, 76.32 , "milk", true, [12, "ray"] , 14 , 2193.3453];
console.log(numsOnly(newArr));

/*Bonus (Only If You Have Time):

Make a second function that removes them from the given array. (instead of copying to a new array)
Do you need to return the array?*/

function removeNums(arr){
	var temp = [];
	for(var i = 0; i < arr.length; i++){
		if(typeof arr[i] != "number"){
			temp.push(arr[i]);
		}
	}
	return temp;
}

console.log(removeNums(newArr));
