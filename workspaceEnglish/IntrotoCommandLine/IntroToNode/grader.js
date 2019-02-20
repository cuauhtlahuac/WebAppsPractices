
var scores = [90, 98, 89, 100, 100, 86, 94];



function average(scores){
    
    scores.forEach(function(num){
        var sum = 0;
        sum = sum+num;
        
        var avg = sum/scores.length;
        
         return Math.round(avg);
        
    });
    
}

average(scores);
console.log(average(scores));