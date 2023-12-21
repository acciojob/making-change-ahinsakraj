const makeChange = (c) => {
  // your name here
	let ans={
		q:0,
		d:0,
		n:0,
		p:0
	};
	
	while (c) {
		if(c>=25){
			ans["q"]++;
			c-=25;
		}
		else if(c>=10){
			ans["d"]++;
			c-=10;
		}
		else if(c>=5){
			ans["n"]++;
			c-=5;
		}
		else {
			ans["p"]++;
			c-=1;
		}
	}
	return ans;
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));