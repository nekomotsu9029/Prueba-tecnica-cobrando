function isPrime(num) {
    for(let i = 2,raiz=Math.sqrt(num); i <= raiz; i++)
        if(num % i === 0) return false;
    return num > 1;
}
for (let x=0;x<=100;x++) {
    if (isPrime(x))
        console.log("El número " + x + " es primo");
}