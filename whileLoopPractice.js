var daysUntilMyBirthday = 60;

/*
For every day, print how many days left.

If it's more than 30 days, print a sad message.

If it's less than 30 days, sound excited!

If it's less than 5 days, SCREAM IT!*/


function birthday(days){
	while(daysUntilMyBirthday != 0){
		if(daysUntilMyBirthday >= 30){
			console.log(daysUntilMyBirthday + "days until my birthday. Such a long time... :-(");
		}
		else if(daysUntilMyBirthday <30 && daysUntilMyBirthday >= 5){
			console.log("Only " + daysUntilMyBirthday + " days until my birthday! Getting excited! :-)");
		}
		else if(daysUntilMyBirthday < 5){
			console.log(daysUntilMyBirthday + " DAYS UNTIL MY BIRTHDAY!!!!!")
		}
		daysUntilMyBirthday-=1;
	}

	console.log("♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪ღ♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•*♪ღ♪░H░A░P░P░Y░ B░I░R░T░H░D░A░Y░░ T░░O░░ M░E░E░E░E░░!░░!░░♪ღ♪*•♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•«")
}

birthday(daysUntilMyBirthday);
