var fibbonacci = function(n){
	var first = 0;
	var second = 1;
	var sum = 1;
	for(var i=1; i<=n; i++){
		var sum = first + second;
		first = second
		second = sum
	}

	return sum;
}

console.log(fibbonacci(5))