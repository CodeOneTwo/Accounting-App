
var start = new Date().getTime();
var pi = estimatePi(10000000);
var end = new Date().getTime();

console.log(pi, (end - start) / 1000);

function estimatePi(shots: number) {
    var counter = 0;
    var x: number;
    var y: number;

    for(let i = 0; i < shots; i++) {
        x = Math.random();
        y = Math.random();

        var abstand = Math.sqrt(x * x + y * y);

        if(abstand < 1) {
            counter += 1;
        }
    }

    return counter / shots * 4;
}