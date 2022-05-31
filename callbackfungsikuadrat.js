
//tanpa callback
function kuadrat (x) {setTimeout(()=> x*x,100);}
console.log (kuadrat(5));

//dengan callback
function kuadratx (x, callback) {setTimeout(()=> callback (x*x),100);}
kuadratx (5, console.log);

