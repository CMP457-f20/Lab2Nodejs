var temp = (((Math.random() * 8)) + 18);
var opclose_boolean = Math.random() <=0.5 ;

if (temp > 25)
{
    console.log("It is too hot... AC switched on")
}
else if (temp < 25)
{
    console.log("It is too cold.. AC switched off")
}
else if (opclose_boolean)
{
    console.log("Someone walked in...")
    console.log("Welcome.. Lights switched on")
}
else if (!opclose_boolean)
{
    console.log("Someone left...")
    console.log("Bye bye! Lights switched off")
}


