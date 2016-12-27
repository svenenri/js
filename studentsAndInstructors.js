var students = [
     {first_name:  'Michael', last_name : 'Jordan'},
     {first_name : 'John', last_name : 'Rosales'},
     {first_name : 'Mark', last_name : 'Guillen'},
     {first_name : 'KB', last_name : 'Tonel'}
]

function printNames(array){
	for(var i = 0; i < array.length; i++){
		console.log(students[i].first_name + " " + students[i].last_name)
	}

}

printNames(students);


var users = {
 'Students': [
     {first_name:  'Michael', last_name : 'Jordan'},
     {first_name : 'John', last_name : 'Rosales'},
     {first_name : 'Mark', last_name : 'Guillen'},
     {first_name : 'KB', last_name : 'Tonel'}
  ],
 'Instructors': [
     {first_name : 'Michael', last_name : 'Choi'},
     {first_name : 'Martin', last_name : 'Puryear'}
  ]
 }

 function printInfo(objects){
	 for(var i in users){
		 if(objects.hasOwnProperty(i)){
			 var keyName = i;
			 console.log(keyName);
			 for(var i = 0; i < users[keyName].length; i++){
				var length = users[keyName][i].first_name.length + users[keyName][i].last_name.length;
		 		console.log(i+1 + " - " + users[keyName][i].first_name + " " +
				users[keyName][i].last_name + " - " + length);
		 	}
		 }
	 }
 }

 printInfo(users);
