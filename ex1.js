const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max-min +1)) + min;
}

var temp = randomNumber(18, 30);   //for temperature
var opclose = Math.random() >= 0.5;   //for door close and open

console.log("The room tempterature is "+ temp);



if (temp >= 25)
{
   console.log("It is too hot... AC switched on");
         if (opclose)
            {
                console.log("Someone walked in...");
                console.log("Welcome.. Lights switched on");
            }
            else 
            {
                console.log("Someone left...");
                console.log("Bye bye! Lights switched off");
            }

}

else  if (temp < 25)
{
    
    console.log("It is too cold.. AC switched off")
        if (opclose)
        {
            console.log("Someone walked in...");
            console.log("Welcome.. Lights switched on");
        }
        else 
        {
            console.log("Someone left...");
            console.log("Bye bye! Lights switched off");
        }
}
 
