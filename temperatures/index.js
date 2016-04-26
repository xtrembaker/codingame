/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var n = parseInt(readline()); // the number of temperatures to analyse
var temps = readline(); // the n temperatures expressed as integers ranging from -273 to 5526

if(temps.length > 0){
    temps = temps.split(' ');
    temps.sort(function(a, b){
        a = parseInt(a);
        b = parseInt(b);
        return a > b;
    });
}else{
    temps = [];
}

var result = 0;
var previous;
var previousAbs;

for(var i=0;i<temps.length;i++){
    if(!previous){
        previous = temps[i];
        previousAbs = Math.abs(temps[i]);
        result = temps[i];
    }else if(Math.abs(temps[i]) < previousAbs){
        previous = temps[i];
        previousAbs = Math.abs(temps[i]);
        result = temps[i];
    }else if(Math.abs(temps[i]) === previousAbs){
        result = temps[i];
    }
    printErr(Math.abs(temps[i]));
}

print(result);

