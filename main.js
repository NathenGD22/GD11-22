var capycoins = 0;

function capycoinClick(number){
    capycoins = capycoins + number;
    document.getElementById("capycoinscookies").innerHTML = capycoins;
};

var capys = 0;

function buyCapy(){
    var capyCost = Math.floor(10 * Math.pow(1.1,cursors));     //works out the cost of this cursor
    if(capycoins >= capyCost){                                   //checks that the player can afford the cursor
        capys = capys + 1;                                   //increases number of cursors
    	capycoins = capycoins - cursorCost;                          //removes the cookies spent
        document.getElementById('cursors').innerHTML = capys;  //updates the number of cursors for the user
        document.getElementById('cookies').innerHTML = capycoins;  //updates the number of cookies for the user
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,capys));       //works out the cost of the next cursor
    document.getElementById('cursorCost').innerHTML = nextCost;  //updates the cursor cost for the user
};

window.setInterval(function(){
	
	capyClick(capys);
	
}, 1000);
