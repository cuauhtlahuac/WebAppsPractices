function average(x) {
	var total = 0
	for (var i = 0; i < x.length; i++) {
		total += x[i];
	}
	var avgscore = total / x.length
	return Math.round(avgscore);
}

var score = [90,98,89,100,100,86,94];
console.log(average(score));

var score2 = [40,65,77,82,80,54,73,63,95,49];
console.log(average(score2));