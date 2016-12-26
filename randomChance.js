/* Let's play the slots!

Bonus (Only If You Have Time):

Let the user pass the number they are willing to leave with
(ex: If they won the lottery and still have 40 coins, they will keep playing until they have collected 200 coins) */


function slot(quarters){

	/* var prize returns winnnings between 50 and 100 quarters */
	var minWin = 50, maxWin = 100;
	var prize = Math.floor(Math.random() * (maxWin - minWin + 1) + minWin);

	/*console.log(playerNumber + " , " + winningNumber); Testing code*/
	while(quarters >= 0){

		/* When player enters a quarter a random playerNumber and winningNumber is
			generated. If playerNumber == winningNumber then the player wins.*/
		var playerNumber = Math.floor(Math.random() * 100);
		var winningNumber = Math.floor(Math.random() * 100);

		if(playerNumber == winningNumber){
			var winnings = prize + quarters
			console.log("You Win! Your prize is " + prize + " coins!");
			console.log("Your total winnings is " + winnings + " coins! Time to cash out!")
			return prize;
		}
		if(quarters == 0){
			console.log("No prize won. Better luck next time. :-(")
			return quarters;
		}
		quarters -= 1;

	}


}

slot(100);
