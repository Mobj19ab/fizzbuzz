// laver et for loop for at danne en talrække fra 1-100
for (var n=1; n<=100; n++) {
    // her laver jeg min output funktion
    var output="";
    //her skaber jeg 2 variabler. 1 for a og 1 for b. dette gør at jeg kan ændre tallene for a og b og få en anden talrække
    var a=4;
    var b=5;
// her laver jeg mine if statements så hvis nkan divideres med a eller b og dette giver 0 skal den console.log det respektive output
    if(n%a==0)
        output += "fizz";
    if(n%b==0)
        output += "buzz";
    // her bliver min console.log dannet og mit result bliver printet i consolen gennem denne kommando
    console.log(output||n);
}