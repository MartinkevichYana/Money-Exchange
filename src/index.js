// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    var obj = {};
    var curr;
    var h, q, d, n, p;
    if (currency > 1000) {
    	obj.error = "You are rich, my friend! We don't have so much coins for exchange";
    } else if (currency != 0) {
	    if(currency >= 50 && currency < 1001) {
	    	h = Math.floor(currency/50);
	    	obj.H = h;
	    	currency = currency - h*50;
	    }
	    if(currency >= 25) {
	    	q = Math.floor(currency/25);
	    	obj.Q = q;
	    	currency = currency - q*25;
	    }
		if(currency >= 10) {
			d = Math.floor(currency/10);
			obj.D = d;
			currency = currency - d*10;
		}
		if(currency >= 5) {
			n = Math.floor(currency/5);
			obj.N = n;
			currency = currency - n*5;
		}
		if(currency >= 1) {
			obj.P = currency;
	    }
	}
	return(obj);
}
