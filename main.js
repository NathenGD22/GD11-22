var CapyCoins = 0;

function capyClick(number){
    cookies = CapyCoins + number;
    document.getElementById("CapyCoins").innerHTML = CapyCoins;
};

var cursors = 0;

function buyCapy(){
    var capyCost = Math.floor(10 * Math.pow(1.1,Capys));     //works out the cost of this cursor
    if(CapyCoins >= capyCost){                                   //checks that the player can afford the cursor
        Capys = Capys + 1;                                   //increases number of cursors
    	CapyCoins = CapyCoins - capyCost;                          //removes the cookies spent
        document.getElementById('Capys').innerHTML = Capys;  //updates the number of cursors for the user
        document.getElementById('CapyCoins').innerHTML = CapyCoins;  //updates the number of cookies for the user
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,Capys));       //works out the cost of the next cursor
    document.getElementById('capyCost').innerHTML = nextCost;  //updates the cursor cost for the user
};

window.setInterval(function(){
	
	capyClick(cursors);
	
}, 1000);
