var date = new Date();

var hour = date.getHours();

var minute = date.getMinutes();

var period = "AM";

if(date.getHours() > 12){
	hour = hour - 12;
	period = "PM";
	var time = hour + ":" + minute + period;
}

function whatTime(hour, minute, period){
	var newTime = "just after";
	var timeOfDay = "in the morning"
	var isTime;

	if(minute == 30){
		newTime = "half past"
	}
	else if(minute > 30){
		newTime = "almost"
		hour = hour + 1;
	}

	else if(minute == 5){
		newTime = "5 after"
	}
	else if(minute == 15){
		newTime = "quarter after"
	}

	if(period == "PM" && hour >= 5 && hour < 8){
		timeOfDay = "in the evening"
	}
	else if(period == "PM" && hour >= 1 && hour < 5){
		timeOfDay = "in the afternoon"
	}
	else if(period == "PM" && hour >= 8){
		timeOfDay = "at night"
	}
	else if(period == "AM" && hour == 12 && minute == 00){
		timeOfDay = "midnight"
	}
	else if(period == "PM" && hour == 12 && minute ==00){
		timeOfDay = "noon"
	}

	isTime = "It's " + newTime + " " + hour + period + " " + timeOfDay + ".";

	return isTime;
}

console.log(whatTime(hour, minute, period));
